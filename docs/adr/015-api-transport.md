# ADR-015: gRPC и grpc-gateway для API Space

Дата: 7 октября 2026 года.

Статус: принято направление; реализация и потоковый профиль требуют прототипа. Выбор новой протокольной основы по ADR-013 остаётся отдельным решением.

## Решение

Единственный источник контрактов application/admin API — `.proto` в `protocol/proto/space/v1/`. Нативный клиент использует gRPC; веб-панель и обычные интеграции — HTTP/JSON через grpc-gateway. Генерируем server/client bindings и OpenAPI из тех же definitions. Бизнес-логика, ACL и транзакции общие.

Discovery/well-known остаётся небольшим HTTPS JSON-документом. Assets передаются HTTP upload/download, интерактивное медиа — WebRTC, эфиры — HLS. gRPC не используется для переноса видео вместо специализированного media transport.

```text
Native client → gRPC ──────────────────────┐
                                         ▼
                                  Application services
                                         ▲
Admin web → HTTP/JSON → grpc-gateway ──────┘
```

Для первоначального Go server gateway может находиться в одном процессе с gRPC endpoint и общим domain layer; отдельный публичный контейнер gateway не обязателен. Предпочесть вызов через внутреннее gRPC соединение, чтобы одинаковые interceptors применялись к обоим входам. Если используется in-process direct registration, отдельно обеспечить те же auth/ACL checks: обход transport interceptors недопустим.

## Контракты

Services: AuthService, IdentityService, ChannelService, ContentService, SyncService, SessionService и AdminService. Методы application API имеют `google.api.http` annotations. Конкретные методы, поля и HTTP mappings утверждаются fixtures; текущие JSON-примеры README являются проектными моделями, не обещанием byte-identical ProtoJSON.

Версионируем package и service names. Field numbers не переиспользуются, удалённые поля/enum values резервируются; presence optional fields и unknown enums определяются явно. Проверяем breaking changes и закрепляем версии генераторов. ProtoJSON использует свои правила для bytes, int64, enums и имён полей; их нельзя молча смешивать с прежними base64url/JCS envelopes.

Подписи identity/recovery по-прежнему проверяются по зафиксированным domain-separated JCS bytes. Protobuf serialization не объявляется canonical signature format. Подписанный envelope можно передавать отдельным bytes-полем с точными исходными байтами; HTTP-представление такого поля подчиняется ProtoJSON, а внутреннее содержимое сохраняет собственный формат. Проверяем round trip независимо для gRPC и gateway.

## Авторизация и ошибки

Gateway явно преобразует разрешённые HTTP credentials в gRPC metadata; actor определяется сервером. Client metadata не может назначать internal/trusted role. AdminService имеет отдельные permissions; CSRF и Origin policy остаются обязательными для cookie-based web auth. Отдельный internal gRPC port не публикуется без необходимости.

Общие gRPC statuses и typed error details отображаются в документированные HTTP statuses/JSON errors. Retryable failure отличаем от ACL denial. Actions имеют устойчивый idempotency key; автоматический gRPC retry не даёт exactly-once. Для unary RPC задаём deadlines, для streams — cancellation, heartbeat и shutdown policy.

## Realtime

Нативный `SyncService.Subscribe` — server-streaming RPC с resume cursor. Commands идут отдельными unary calls. Сохраняются durable log, ordered cursor, replay, snapshot watermark, dedup и bounded queues.

Для браузера сначала исследуем gateway server streaming с чтением через Fetch/ReadableStream. Это не SSE и не WebSocket по умолчанию. Явно специфицировать JSON frames, terminal error после уже отправленного HTTP 200, heartbeat, cursor и reconnect. Proxy должен flush frames и не буферизовать поток. Если профиль не проходит целевые браузеры/прокси, выбрать отдельный SSE или WebSocket adapter в ADR; не обещать поддержку bidi через обычный JSON gateway.

До этого решения раздел WebSocket в README описывает возможный fallback, не обязательный транспорт новой основы. Не поддерживать одновременно несколько event transports без demonstrated need.

## Приёмка прототипа

1. Go server + gateway под одним HTTPS origin и Docker proxy.
2. Flutter gRPC и browser HTTP/JSON вызывают CreateContent и один AdminService method.
3. Одинаковые auth/ACL отказ, idempotency и revision conflict.
4. Native stream и browser stream переживают disconnect/replay; proxy не задерживает events до закрытия потока.
5. Revocation прекращает активную подписку; deadline/cancel не оставляет server goroutines.
6. Signature envelope проходит оба пути без изменения подписываемых байтов.
7. Browser profile выбирается по результатам; неудача не скрывается наличием native streaming.

## Источники

- [grpc-gateway](https://github.com/grpc-ecosystem/grpc-gateway): генерация HTTP/JSON gateway по protobuf services.
- [Настройка gateway](https://grpc-ecosystem.github.io/grpc-gateway/docs/mapping/customizing_your_gateway/): metadata, marshaling и streaming errors.
- [gRPC core concepts](https://grpc.io/docs/what-is-grpc/core-concepts/): виды вызовов и lifecycle.
