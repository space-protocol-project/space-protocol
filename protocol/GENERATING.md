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

Go package: `github.com/space-protocol-project/space-server/gen/space/v1`. Сгенерированные bindings коммитятся в репозиториях потребителей; обычные тесты не требуют генераторов. Версии: Buf 1.73.0, protoc-gen-go 1.36.6, protoc-gen-go-grpc 1.5.1, grpc-gateway/openapiv2 2.26.3; Dart protoc_plugin закреплён инструментами приложения. Внешние proto находятся в `protocol/vendor`, Buf Registry не требуется.

Контракт экспериментальный. Изменения проверяются через lint, генерацию, тесты сервера и сквозную совместимость с приложением. Стабильная базовая версия для breaking checks ещё не назначена.
