# Документация

Корневой [README](../README.md) описывает архитектуру, [TODO](../TODO.md) — этапы и критерии приёмки.

- [P1: контракты и прототипы](SPACE-PLUGINS-P1.md): экспериментальные схемы, WASM-хост, декларативный Flutter UI, доказательства CI и открытые границы.

- [Карта P0 для системы расширений](SPACE-PLUGINS-P0.md): перенос четырёх функций в отдельные репозитории, границы ядра, исходные сценарии и открытые проверки; [каталог RPC, миграций и файлов](SPACE-PLUGINS-P0-INVENTORY.md).

- [Система расширений Space и план перехода](SPACE-PLUGINS.md): проект серверных WASM-плагинов, интерфейса, «Обзора», SDK и миграции четырёх функций; рекомендуемые этапы после 0.8.0. Реализация ещё не выполнена.

- [Руководство приложения](APPLICATION-GUIDE.md): установка, подключение, чат, выбор языка, recovery и сопряжение.
- [Управление сервером](ADMIN-GUIDE.md): владелец, настройки, каналы, участники, приглашения и устройства в общем Flutter-приложении.
- [Скачать последнюю версию](https://github.com/space-protocol-project/space-app/releases/latest): Windows x64, macOS Apple Silicon и Linux x64.
- [Снимки интерфейса v0.2.2](https://github.com/space-protocol-project/space-app/blob/main/docs/SCREENSHOTS.md): десять экранов с демонстрационными данными.
- [Обновление приложения](https://github.com/space-protocol-project/space-app/blob/main/docs/APP-UPDATES.md) и [восстановление домашнего сервера](https://github.com/space-protocol-project/space-app/blob/main/docs/HOME-RECOVERY.md).
- [Установщики](https://github.com/space-protocol-project/space-app/blob/main/packaging/README.md): Windows Setup, macOS DMG, Linux RUN и ограничения платформ.
- [Проверка восстановления](RECOVERY-DRILL.md): автоматические и ручные сценарии; проверка физической QR-камеры остаётся открытой.

В `adr/` сохраняем принятые архитектурные решения, включая отклонённые альтернативы. Каждое решение содержит статус, контекст, варианты, доказательства, последствия и дату. Прототип и принятое решение различаются явно.
