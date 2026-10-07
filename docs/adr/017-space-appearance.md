# ADR-017: пользовательская тема и согласованное оформление пространства

Дата: 7 октября 2026 года. Статус: принято направление; реализовано в HTML-прототипе, backend contract и Flutter integration ещё не реализованы.

## Решение

Пользователь владеет оформлением клиента. Сервер может предложить branding для своего пространства, но не принудительно заменить тему приложения. Согласие даётся после просмотра, отдельно на каждый trusted server и конкретный theme revision/content digest. Оно отменяется одним действием; пользовательская палитра не удаляется.

```text
Client defaults → user theme → approved space colors → accessibility constraints
```

Approved space colors действуют в sidebar, header, content и context выбранного пространства. Глобальная навигация между серверами, identity/recovery UI, browser/system dialogs и security warnings не стилизуются сервером. User light/dark mode, text scale, reduced motion и high contrast имеют приоритет.

## Предложение manifest extension

Это проектный пример, не существующее поле текущего protobuf manifest:

```json
{
  "extensions": {
    "space.theme/v1": {
      "revision": 3,
      "label": "Лесная мастерская",
      "colors": {
        "primary": "#28614E",
        "background": "#F6F5F0",
        "surface": "#FFFEFA",
        "text": "#253B34"
      }
    }
  }
}
```

Theme capability optional. Клиент может её проигнорировать, а пользователь отказаться без потери функций или доступа. Branding не изменяет ACL, actions, порядок доверия или видимость предупреждений.

## Безопасность и контраст

Разрешён только закрытый allowlist семантических цветов в формате `#RRGGBB`. Никаких CSS, HTML, JavaScript, SVG, remote font URLs, custom layouts или executable themes. Ограничить размер payload, типы и версии. Проверить контраст до preview и после вычисления производных tokens. Некорректные цвета отклонять с безопасной client theme, а не применять частично.

Фиксированные warning/error/permission semantics принадлежат клиенту. Сервер не может стилизовать действия согласия так, чтобы скрывать их последствия. Логотип/cover, если будут добавлены отдельным assets profile, не превращаются в arbitrary CSS.

В прототипе editor проверяет основные пары ≥4.5:1, а вычисленные muted/soft/side/sand цвета имеют fallback. Это не заявление о полной WCAG conformance; screen reader, high contrast, focus и крупный текст требуют отдельного аудита.

## Согласие и обновление

1. Сначала проверяется trusted server identity по обычной модели клиента.
2. Клиент валидирует theme и показывает preview, автора предложения и область действия.
3. User consent сохраняется локально для `trusted server ID + accepted revision + canonical theme digest`.
4. При выборе другого пространства используется его consent либо user theme.
5. При новом предложении прежнее согласие не переносится автоматически; user theme действует до нового выбора.
6. При trust conflict серверная theme не применяется до разрешения доверия.
7. Выход/отключение сервера и отзыв темы не удаляют личные настройки.

Не нужно постоянно показывать навязчивые modal prompts. Достаточно ненавязчивого уведомления и настройки «Оформление пространства». Допустим режим «Всегда моя тема». Автоматическое принятие будущих цветов в v1 не включаем.

## Реализация

`client/design/prototype/theme.js`: user palettes, color editor, contrast, preview, separate consent, admin proposal, light/dark adaptation. Ключом демо выступает domain `.example.invalid`; это не production trust binding. Fingerprint прототипа — локальное точное представление предложения, не криптографический server proof.

Для протокола надо определить canonical theme digest, schema/fixtures, optional capability и auth для admin mutation. Для Flutter — immutable `SpaceAppearance` overlay поверх user `ThemeData`, локальный consent repository и единая проверка palette. Нельзя устанавливать глобальный singleton theme при переключении сервера: scope должен оставаться явным.
