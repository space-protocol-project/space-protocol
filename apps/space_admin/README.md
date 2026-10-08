# Браузерная оболочка управления Space

Это дополнительный вход в общий административный модуль приложения Space.
Основной пользовательский путь — управление выбранным сервером из client.

Первый срез: существующие браузерные ключи, настройки, setup-code, logout и
проверка revision. Остальные функции пока в текущей /space. [ADR-025](../../docs/adr/025-unified-administration.md).

```powershell
flutter pub get
flutter build web --release --base-href /space/flutter/ --no-web-resources-cdn
$env:SPACE_ADMIN_WEB_DIR = (Resolve-Path build/web).Path
```

Передайте SPACE_ADMIN_WEB_DIR процессу Go-сервера с PostgreSQL. Откройте
http://127.0.0.1:8080/space/flutter/; текущая /space остаётся доступной.
Профиль браузера и origin должны совпадать для использования прежних ключей.
Нативная сборка отдельного приложения Space Admin сейчас не нужна и не выпускается.

Шрифт Noto Sans: google/fonts, SIL Open Font License; полный текст в assets/fonts/OFL.txt.
