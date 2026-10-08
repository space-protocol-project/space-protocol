# Общие модули

- space_admin_ui: настройки сервера для native клиента и браузерной оболочки.
- space_api: HTTP/JSON gateway и общий формат ошибок; native адаптер вызывает gRPC.
- space_identity: начальный браузерный мост; native key storage пока остаётся в client.
- space_ui: Gruvbox для web; native модуль наследует тему основного приложения.

Это начальное выделение, а не завершённый перенос всей клиентской архитектуры.
[Решение и этапы](../docs/adr/025-unified-administration.md).
