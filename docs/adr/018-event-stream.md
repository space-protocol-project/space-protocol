# ADR-018: долговечная подписка событий

Дата: 8 октября 2026 года. Статус: локальная экспериментальная реализация. Production federation, ACL и transport security требуют отдельных решений.

## Контракт

`SyncService.Subscribe(channel_id, after)` — server-streaming RPC. Кадр содержит либо `event + cursor`, либо `heartbeat + cursor`. В текущем профиле доступны только общий канал `general` и `content.created`. Native Flutter использует gRPC; gateway предоставляет `GET /api/v1/channels/general/events/subscribe?after=...`.

Журнал PostgreSQL остаётся источником истины. Подписка сначала проверяет курсор, отправляет initial heartbeat, затем выдаёт сохранённые события после него в порядке commit. Клиент сохраняет cursor в памяти только после применения события. При разрыве повторяет Subscribe с этим cursor и дедуплицирует сообщения по ID. Initial history и replay могут пересекаться; это безопасно для неизменяемого content данного профиля. Snapshot watermark и редактирование требуют нового контракта.

## Реализация и ограничения

Нет клиентского polling каждые две секунды. На сервере пока используется проверка durable log каждые 500 ms; PostgreSQL LISTEN/NOTIFY/outbox wakeup не добавлены. Поэтому это потоковый транспорт с bounded polling источника, а не мгновенная event-driven доставка. До 100 записей загружаются на один batch; в каждом процессе до 64 активных подписок. Нет неограниченного fan-out queue.

Heartbeat отправляется при простое раз в 15 секунд. Одна отправка ограничена 5 секундами; медленный читатель получает terminal deadline, а возврат gRPC handler закрывает transport context. Context cancellation освобождает slot и DB work. Эти ограничения проверяются для локального транспорта; reverse proxy и масштабирование ещё не исследованы.

## Авторизация

Stream interceptor проверяет тот же Bearer token, что и unary RPC. Session/grant expiry и revoked state проверяются в процессе чтения, в том числе перед отправкой каждого события. При отзыве подписка завершается; обычная задержка проверки до 500 ms, при блокировке Send — до её 5-second deadline. Событие, уже переданное в transport, нельзя отозвать задним числом. Не обещается атомарная граница revoke относительно каждого byte на сети.

При истечении токена клиент выполняет обычный device login, затем Subscribe с прежним cursor. При отказе device login доступ прекращается; новый root grant автоматически не создаётся. Invalid cursor/unsupported profile — terminal state, требующий повторного подключения, а не молчаливой потери истории.

## Flutter lifecycle

Клиент ждёт кадр до 35 секунд. При transient error/EOF повторяет подключение с задержками 1, 2, 4, 8, 16, 32 секунды. Задержка сбрасывается после устойчивого подключения. Нет jitter в текущем локальном профиле; он нужен до массового размещения.

UI показывает восстановление событий, сохраняет историю и черновик. Автоматической офлайн-отправки нет; пользователь повторяет отправку с прежним idempotency key. Cancel/generation guard запрещают применять старые callbacks после смены сервера/dispose. Поток закрывается при отключении и отзыве.

## Gateway

grpc-gateway выдаёт newline-separated JSON chunks, обычно `{ "result": ... }`. Ошибка после HTTP 200 приходит последним `{ "error": ... }` кадром: клиент обязан читать её, а не оценивать только status. Это не SSE и не WebSocket. Каждый кадр продлевает HTTP write deadline на 20 секунд, чтобы общий unary timeout 10 секунд не обрывал подписку; зависшая запись остаётся ограниченной.

Browser Fetch reader, proxy flushing, CORS, browser resume persistence и production TLS пока не включены. HTML design prototype не подключён к этому API.

## Приёмка

Go/PostgreSQL checks: native replay/live, cancellation, stream auth, HTTP initial frame/flush, heartbeat дольше общего write timeout, закрытие native/HTTP после revoke. Dart/Go CI: live message, cancellation, пропущенное сообщение и resume, active revoke. Controller tests: cursor continuation, dedup, terminal auth, invalid heartbeat и stop без фоновых retry.

Источники: [gRPC cancellation](https://grpc.io/docs/guides/cancellation/), [grpc-gateway streaming](https://github.com/grpc-ecosystem/grpc-gateway/blob/main/docs/docs/mapping/customizing_your_gateway.md).
