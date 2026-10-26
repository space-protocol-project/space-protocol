# Генерация контрактов

Канонический `.proto` и OpenAPI находятся в `space-protocol`, реализации — в `space-server` и `space-app`. Генераторы уже установлены в среде разработки; при их отсутствии установка требует отдельного согласования.

Проверка контракта из корня этого репозитория:

```powershell
buf lint
buf generate protocol/proto
```

Go-артефакты появятся в игнорируемом `gen/go/`, OpenAPI — в `protocol/openapi/`. Здесь активных исходников сервера и клиента нет.

С соседними checkout генерация для сервера выполняется из `space-server`:

```powershell
buf generate ../space-protocol/protocol/proto --template buf.gen.yaml
```

Генерация для приложения выполняется из `space-app`:

```powershell
buf generate ../space-protocol/protocol/proto --template client/buf.gen.yaml
```

Go package: `github.com/space-protocol-project/space-server/gen/space/v1`. Сгенерированные bindings коммитятся в репозиториях потребителей; обычные тесты не требуют генераторов. Для нового поиска в CI проверены свежие стабильные генераторы: Buf 1.75.0, protoc-gen-go 1.36.12, protoc-gen-go-grpc 1.6.2, grpc-gateway/openapiv2 2.32.0 и Dart protoc_plugin 25.1.0. Внешние proto находятся в `protocol/vendor`, Buf Registry не требуется. Ранее сгенерированные контракты не перегенерируются без изменения их исходников.

Контракт экспериментальный. Изменения проверяются через lint, генерацию, тесты сервера и сквозную совместимость с приложением. Стабильная базовая версия для breaking checks ещё не назначена.

Connect: из space-server `buf generate ../space-protocol/protocol/proto --template buf.connect.gen.yaml` (go run закреплённого protoc-gen-connect-go 1.21.1); из space-app `dart pub global activate connectrpc 2.0.1`, затем `buf generate ../space-protocol/protocol/proto --template client/buf.connect.gen.yaml`. Обычная сборка использует закоммиченные артефакты. Runtime Go protobuf — 1.36.12.

При остановленных локальных сборках используйте workflow `source-generation.yml`
в space-app. Он получает отдельные коммиты трёх репозиториев, проверяет контракт
и генерирует новый `space_search.proto`; состояния Freezed, переводы, форматирование,
анализ и целевые тесты включаются параметром `models`. Результат сохраняется
небольшим артефактом `generated-space-search`, проверяется и коммитится обычным
способом. CI не изменяет исходные ветки автоматически.
