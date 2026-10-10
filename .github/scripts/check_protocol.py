import json
from pathlib import Path

root = Path(__file__).resolve().parents[2]
files = list((root / "protocol/openapi").rglob("*.json"))
if not files:
    raise ValueError("Нет OpenAPI")
for path in files:
    data = json.loads(path.read_text(encoding="utf-8"))
    if data.get("swagger") != "2.0" or not data.get("paths"):
        raise ValueError("Неверный профиль OpenAPI: " + str(path))
    operations = []
    for endpoint in data["paths"].values():
        for method, operation in endpoint.items():
            if method in ("get", "post", "patch", "put", "delete"):
                operations.append(operation["operationId"])
    if len(operations) != len(set(operations)):
        raise ValueError("Повтор operationId")
proto = (root / "protocol/proto/space/v1/space.proto").read_text(encoding="utf-8")
if "github.com/space-protocol-project/space-server/gen/space/v1" not in proto:
    raise ValueError("Go package не соответствует репозиторию сервера")
print("OpenAPI JSON, операции и Go package проверены")
