# P1/E03: межпрофильные границы именованных IPC-объектов Windows

6 ноября 2026 года. Продолжение [файловых границ LPAC](SPACE-PLUGINS-P1-WINDOWS-HANDLES.md). Проверяется отдельный прототип `NewWindowsRestrictedHost` в Windows CI. Рабочий broker приложения и сервера не подключается, capabilities и политика запуска не расширяются.

## Объекты и права

Тестовый supervisor создаёт по одному manual-reset event и именованному duplex pipe для каждого из двух разных package SID. Имена случайны, ресурсы принадлежат только этому тесту. DACL разрешает полный доступ текущему пользователю и SYSTEM, а одному package SID — только нужные права:

- event: EVENT_MODIFY_STATE и SYNCHRONIZE;
- pipe: FILE_READ_DATA, FILE_WRITE_DATA, FILE_READ_ATTRIBUTES и SYNCHRONIZE, без FILE_CREATE_PIPE_INSTANCE.

Event создаётся с явным Global-именем. Pipe supervisor создаёт по полному адресу `\\.\pipe\Sessions\<session>\AppContainerNamedObjects\<SID>\<name>`. Относительная часть получается через [GetAppContainerNamedObjectPath](https://learn.microsoft.com/en-us/windows/win32/api/securityappcontainer/nf-securityappcontainer-getappcontainernamedobjectpath), сессия — через ProcessIdToSessionId. Свой LPAC-клиент использует `\\.\pipe\LOCAL\<name>`, а чужой профиль получает явный адрес целевого объекта. Успех/отказ относится одновременно к этому пути и ACL, не к одному лишь DACL в отрыве от пространства имён.

Pipe создаётся как первая и единственная инстанция, с PIPE_REJECT_REMOTE_CLIENTS. Перед каждой проверкой он пересоздаётся: отказ не может объясняться занятостью предыдущим клиентом. Event сбрасывается перед вызовом, после него supervisor проверяет реальное signaled-состояние.

Оба объекта имеют low integrity label с NO_WRITE_UP. Иначе отказ записи мог бы исходить из MIC даже для своего package SID; это не проверяло бы разделение профилей. Основания: [Mandatory Integrity Control](https://learn.microsoft.com/en-us/windows/win32/secauthz/mandatory-integrity-control) и [права named pipe](https://learn.microsoft.com/en-us/windows/win32/ipc/named-pipe-security-and-access-rights). Правила применены только к созданным тестом объектам, не к пользовательским каталогам или системным объектам.

## Сценарии

Один и тот же нативный `p1-rights` выполняет OpenEvent/SetEvent и CreateFile для duplex-доступа к pipe. Для своего профиля обе операции обязаны завершиться успешно. Чужому SID событие должно вернуть ровно ERROR_ACCESS_DENIED (5). Для pipe отдельно различаются ERROR_ACCESS_DENIED (5) и ERROR_FILE_NOT_FOUND (2): второй означает недоступность чужого имени и не объявляется доказательством отказа DACL. Занятость канала, тайм-ауты и любые другие причины не принимаются. Исходные числовые коды сохраняются в журнале; скрытие имени дополнительно помечается pipe_namespace_hidden=true, dacl_denial_proven=false.

1. Обычный NewProcessHost успешно открывает оба комплекта объектов тем же executable. Затем A обращается к объектам A; B обращается к объектам B — положительные контроли.
2. A обращается к объектам B; B обращается к объектам A — отказы, чужое событие остаётся несигнализированным. Затем каждый повторно успешно использует свои объекты.
3. Хост A закрывается; B повторно успешно использует свои объекты.
4. Создаётся новый хост C с новым SID; доступ к сохранившемуся тестовому объекту старого A и объекту B должен быть запрещён.

После каждого probe Job пуст, активные вызовы и резервирование равны нулю. Объекты создаёт и удаляет supervisor; закрытие LPAC-профиля не объявляется автоматическим удалением чужих handles supervisor.

## Приёмка

[Полная матрица 42177933230](https://github.com/space-protocol-project/space-server/actions/runs/42177933230) успешна для `8bd65090224959c3d72fc41a17371c705a8dc99e`: **9/9 заданий**, включая test/vet/mod verify/govulncheck, race на трёх ОС, Linux isolation/systemd и macOS probes. Пройдены все **11 новых IPC-сценариев**. Windows: **69 результатов pass LPAC**, **18 прежнего Job-профиля**, два ожидаемых helper-пропуска; числа включают родительские и дочерние записи. Прежние 25 аварийных циклов восстановления также успешны.

- Обычный контроль и оба LPAC-профиля успешно открывают свои объекты. Повторные собственные проверки после чужих обращений и после удаления A успешны.
- Все четыре чужих обращения к event возвращают ERROR_ACCESS_DENIED (5), событие остаётся несигнализированным.
- Для pipe A → B и B → A вернули FILE_NOT_FOUND (2): зафиксировано скрытие имени, не доказан отказ DACL. Новый профиль C получил ACCESS_DENIED (5) при обращении к старому A и B.

[Исходные результаты и диагностические прогоны](p1-results/2026-11-06-windows-lpac-ipc/) сохранены с [SHA256SUMS](p1-results/2026-11-06-windows-lpac-ipc/SHA256SUMS). Байты артефактов не преобразованы. Приёмка — одна полная матрица на финальном коммите, без повторов отдельных упавших заданий.

## Диагностика до приёмки

Первый прогон [42176195618](https://github.com/space-protocol-project/space-server/actions/runs/42176195618) подтвердил события, но pipe в общем пространстве был запрещён даже своему SID. Вариант LOCAL, созданный самим supervisor, в [42176517211](https://github.com/space-protocol-project/space-server/actions/runs/42176517211) не совпал с пространством LPAC: свой клиент получил FILE_NOT_FOUND. [42176831383](https://github.com/space-protocol-project/space-server/actions/runs/42176831383) добавил успешный обычный контроль и разрешение чтения атрибутов, но отсутствие имени сохранилось.

[42177033174](https://github.com/space-protocol-project/space-server/actions/runs/42177033174) обнаружил пропущенный разделитель пути. [42177343264](https://github.com/space-protocol-project/space-server/actions/runs/42177343264) показал фактический относительный результат GetAppContainerNamedObjectPath; добавлен префикс сессии. Ошибки этих прогонов не засчитываются как межпрофильный запрет. [42177612138](https://github.com/space-protocol-project/space-server/actions/runs/42177612138) подтвердил оба положительных LPAC-контроля с адресом сессии, но показал FILE_NOT_FOUND для одного обращения к чужому pipe вместо ожидаемого ACCESS_DENIED. Приёмка уточнена: скрытие имени учитывается отдельно от отказа DACL, добавлены повторные собственные контроли после межпрофильных обращений. Тайм-ауты и ACL ради прохождения не ослаблялись.

## Границы

Проверяется конкретный путь открытия именованных объектов и изменения event. Обмен сообщениями по pipe, аутентификация сторон, impersonation, подмена endpoint, отмена активного IPC и отзыв доступа после открытия handle требуют отдельной приёмки рабочего broker. Это не универсальная гарантия для всех IPC API, реестра, сессий входа или сетевых интерфейсов. E03/P1 остаются открытыми, выпуск отложен.
