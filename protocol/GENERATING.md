# Генерация контрактов

Из корня репозитория. Нужны Go и Buf CLI (проверено с Buf 1.73.0).

```powershell
go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.36.6
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.5.1
go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@v2.26.3
go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@v2.26.3
$env:PATH += ';' + (Join-Path (go env GOPATH) 'bin')
buf lint
buf generate protocol/proto
```

Генераторы локальные, версии закреплены командами установки. Runtime gateway совпадает с версией генератора. Внешние `.proto` сохранены в `vendor`, Buf Registry не требуется. Для получения Go-модулей нужен Go proxy или локальный кеш.

Результат: `server/gen/space/v1/` и `protocol/openapi/space/v1/space.swagger.json` (OpenAPI 2). Сгенерированные файлы коммитим, вручную не редактируем. Обычный `go test` не требует генераторов. HTTP API использует ProtoJSON (`serverId`, `idempotencyKey`, `nextCursor`); discovery — отдельный JSON-документ.

Контракты экспериментальные; стабильная совместимость и production identity ещё не определены. Правила breaking changes подготовлены в `buf.yaml`, базовой стабильной версии ещё нет.
