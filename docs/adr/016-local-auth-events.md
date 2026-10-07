# ADR-016: локальный профиль авторизации и durable events

Дата: 7 октября 2026 года. Статус: экспериментальная реализация, не production credential format. ADR-013 и ADR-014 остаются открытыми.

## Первый проверяемый срез

Постоянный сервер всё ещё доступен только на loopback. Discovery и manifest публичны. ContentService и SyncService требуют opaque Bearer token через один gRPC interceptor, включая обращения grpc-gateway. Режим `-demo` остаётся явно временным, без входа и Sync/Auth services.

Политика регистрации — open для локального прототипа. Все зарегистрированные principals имеют доступ к единственному общему чату. Grants дают фиксированные `chat.read` и `chat.write`; регистрация не назначает administrator. Membership, invite/approval, приватные каналы, quotas по actor и ACL ещё не реализованы. Сервер не публикуем наружу.

## Ключи и операции

Root — серверный пользовательский корневой Ed25519-ключ, device — независимый Ed25519-ключ. Ни один приватный пользовательский ключ не передаётся серверу. Principal ID = `u_` + lowercase hex SHA-256(root public key). Клиент должен использовать разные roots на разных серверах; генератор из recovery seed ещё не реализован. `space-demo` создаёт два случайных тестовых ключа только в памяти.

`CreateChallenge` поддерживает:

| Purpose | Вход | Кто подписывает | Результат |
| --- | --- | --- | --- |
| `device.register` | root/device public keys | Root | Grant, без access token |
| `auth.login` | grant ID | Device | Access token на 10 минут |
| `device.revoke` | grant ID и root public key | Root | Отзыв grant и удаление его сессий |

Challenge действует 60 секунд, nonce — 32 случайных байта. Он сохраняется в PostgreSQL и потребляется под row lock в одной транзакции с результатом операции. Корректный параллельный повтор даёт максимум один успех. Неверная подпись не потребляет challenge. Потеря ответа не позволяет повторно получить токен: нужно создать новый login challenge.

Регистрация связывает purpose, root, principal, device key, grant ID, scopes, auth epoch, сроки, server ID и origin. Root proof сохраняется с grant. Это online root-authorized registration transcript; отдельный переносимый offline `device_grant` envelope из архитектурных примеров пока не реализован. Добавление новых устройств требует новой root-подписи. Первый grant имеет срок 30 дней. Epoch хранится и проверяется, API повышения epoch пока отсутствует.

## Точные байты подписи

`Transcript` определён в `server/internal/authn/profile.go`. Поля сортированы по имени, строки ограничены печатным ASCII без `<`, `>`, `&`, числа — точные неотрицательные integers не больше 2^53−1. Массив scopes имеет фиксированный порядок. Представление — компактный UTF-8 JSON, без whitespace и дополнительных полей. Это проверяемое подмножество [JCS RFC 8785](https://www.rfc-editor.org/rfc/rfc8785.html), не универсальная реализация JCS для произвольных пользовательских документов.

Подписывается соответствующий domain prefix, NUL byte и canonical transcript:

```text
device.register → space/device-register/v1\0 || canonical transcript
auth.login      → space/auth-login/v1\0      || canonical transcript
device.revoke   → space/device-revoke/v1\0   || canonical transcript
```

`transcript` и `signature` — protobuf bytes; в HTTP ProtoJSON они представлены стандартным base64. Внутри transcript ключи и nonce — base64url без padding. Это разные уровни кодирования.

Клиент разбирает transcript, восстанавливает canonical bytes и проверяет server ID, ожидаемый origin, purpose, principal/root/device keys, challenge ID, grant ID, scopes, epoch и сроки. Он не подписывает непрозрачный server-provided blob. Тестовый клиент запрещает redirect и поддерживает только точный локальный origin; persistence TOFU, подписанный manifest и полноценная миграция доверия ещё не реализованы.

## Сессии и отзыв

Access token содержит 32 случайных байта. PostgreSQL хранит SHA-256 token, grant ID и expiry. Каждый защищённый RPC проверяет срок сессии, срок grant, revoked state и совпадение auth epochs. Root-authorized revoke удаляет сессии. Запись сообщения дополнительно проверяет сессию в транзакции и берёт shared lock grant: отзыв и запись упорядочиваются этой блокировкой.

Gateway принимает обычный Authorization, отклоняет подстановку actor/authorization через `Grpc-Metadata-*`. Actor определяется из БД, не из полей запроса. Cookie auth и CORS не включены. Challenge cap — 256 активных, grant cap — 32 активных на principal, session cap — 64 на grant. Это ограничители прототипа; полноценный rate limit и очистка всех исторических записей требуют отдельной реализации.

Refresh tokens, root key migration, epoch mutation, WebAuthn, session/device list, signature vectors Go/Dart и независимый crypto review ещё не выполнены. Эти ограничения нельзя скрывать наличием успешного login.

## Журнал событий

`contents`, channel counter и `events` записываются одной транзакцией. Per-channel row lock задаёт commit order; rollback не оставляет событие или продвижение счётчика. Повтор idempotency key возвращает старое сообщение и не создаёт событие. Область ключа теперь `(channel, principal, key)`. Старые записи получают автора `legacy-demo`.

`ListEvents` отдаёт до 100 событий `content.created` с opaque cursor (`event-N` в текущей реализации). После переподключения клиент передаёт последний обработанный cursor через `after` и дедуплицирует по cursor. Unknown cursor отклоняется. Миграция версии 1 в 2 создаёт события существующих сообщений, сохраняя server identity.

На момент принятия ADR-016 был реализован durable polling/replay API. Подписка, heartbeat и lifecycle позже добавлены в [ADR-018](018-event-stream.md). Retention/expired cursor, snapshot watermark и отдельный transactional outbox worker ещё не реализованы; exactly-once delivery клиенту не обещается.

## Проверки

CI поднимает PostgreSQL и проверяет upgrade/backfill, сохранение identity, concurrent login replay, wrong key/origin/server signatures, expiry, HTTP/gRPC auth, metadata spoofing, token hash, revoke и atomic content/event rollback. Дополнительно запускаются настоящий сервер и `space-demo`: register → login → message → retry → events → revoke → HTTP 401. Локальный Docker для этой разработки не требуется.
