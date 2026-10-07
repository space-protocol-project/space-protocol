# Зафиксированные зависимости Protobuf

`google/api/annotations.proto` и `google/api/http.proto` взяты из googleapis/googleapis, commit `323008a12aa9a53eaa880123a0e6c7f3036e6441`. Лицензия Apache-2.0 сохранена в `LICENSE.googleapis`; исходные copyright notices сохранены.

Они нужны для `google.api.http` и локальной генерации без Buf Schema Registry. Не изменяем их вручную; обновление должно фиксировать новый commit и результаты генерации.
