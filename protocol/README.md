# Спецификация Space Protocol

Здесь размещены первые экспериментальные `.proto` и сгенерированный OpenAPI для локального прототипа. [Инструкция генерации](GENERATING.md). Нормативные контракты, JSON Schema, публичные тестовые вектора и conformance ещё предстоит реализовать.

Сначала принимаем ADR-013 о протокольной основе и ADR-014 о credentials. Текущий корневой README — архитектурный проект, а не стабильный стандарт. Production identities и настоящие recovery seeds в fixtures запрещены.

План каталогов: `proto/space/v1/`, `spec/`, `schemas/`, `openapi/`, `fixtures/`, `conformance/`. API contracts и bindings генерируются из `.proto` согласно [ADR-015](../docs/adr/015-api-transport.md). Подписанные identity/recovery envelopes сохраняют отдельный canonical формат. Создаём каталоги по мере появления реальных материалов.
