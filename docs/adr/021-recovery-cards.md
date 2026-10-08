# ADR-021: зашифрованные карточки и делегированное восстановление

Дата: 8 октября 2026. Статус: экспериментальный работающий срез. Не заменяет полный master-seed/HKDF профиль и независимый криптографический аудит.

## Задача и результат

Потеря браузерного профиля не должна менять principal, owner_id и членство, если владелец заранее сохранил карточку. Новый аппарат создаёт независимый рабочий device key; старые рабочие ключи в карточку не входят. Один формат читают WebCrypto-панель и Flutter. Сейчас карточка — зашифрованный JSON-файл; QR-код, сканирование и одноразовый pairing ещё не реализованы.

## Два вида полномочий

Исходный browser root неэкспортируемый CryptoKey. Поэтому панель создаёт отдельный случайный Ed25519 recovery key и просит исходный root подписать device.register со scope identity.recover. Этот флаг включён в подписанный transcript через scopes и срок. Recovery grant может существовать один активный на principal; срок — 3650 суток, без автоматического продления. Для управления пространством исходный root отдельно разрешает space.manage; членство/роль всё равно проверяются сервером.

Карточка панели содержит credential=recovery, seed recovery key, его публичный ключ и grant ID, исходный root public key, серверные ID/key/origin и срок. Секрет шифруется локально. В PostgreSQL попадают только публичный ключ, root signature, transcript и полномочия; карточка/пароль/seed не отправляются серверу.

Исходный Flutter-профиль уже хранит случайный per-server root seed в защищённом ОС vault. Его экспорт создаёт credential=root: зашифрованный исходный root seed и те же сведения доверия. Такая карточка не зависит от срока recovery grant и восстанавливает управляющий root. Оба вида имеют общий внешний формат, но разные полномочия. Это не единый глобальный recovery seed; карточка относится к одному серверу.

## Формат шифрования

```json
{"v":1,"kind":"space-recovery-card","kdf":"PBKDF2-SHA256","iterations":600000,"salt":"…","nonce":"…","ciphertext":"…"}
```

PBKDF2-HMAC-SHA-256, 600000 итераций, случайный salt 16 bytes, ключ AES-256-GCM, nonce 12 bytes, tag 16 bytes. Ciphertext — ciphertext || tag в canonical base64url без padding. AAD — UTF-8 `space/recovery-card/v1`. Метаданные сервера находятся внутри зашифрованного payload. Клиенты требуют точный внешний набор полей, фиксированные v/kdf/iterations и размеры до запуска KDF. Limit: файл 16 KiB, ciphertext 8192 bytes, UTF-8 пароль до 512 bytes и минимум 12 символов. Нет нормализации/обрезания пароля.

Параметр PBKDF2 выбран с учётом [рекомендаций OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html); AES-GCM соответствует направлению [Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html). Это не утверждение FIPS-сертификации или достаточности слабого пароля: файл допускает офлайн-перебор, нужны случайные слова и отдельное хранение пароля. Argon2id и измерение параметров на всех платформах остаются отдельной работой.

## Восстановление

1. Файл и пароль открываются локально; проверяются AEAD и соответствие приватного seed публичному ключу.
2. Discovery должен совпасть с origin/server_id/server_key карточки. Ранее закреплённый ключ сервера не заменяется. В UI отдельно подтверждается замена локальной идентичности для данного адреса.
3. Новый аппарат генерирует случайный device key. Для credential=root обычный root подписывает device.register. Для credential=recovery используется новый purpose device.delegate и подпись recovery key.
4. Новый transcript содержит подписанный authorizer_grant_id. Prefix — `space/device-delegate/v1\0`; проверяются principal, root, target device, origin/server, scopes, nonce, challenge и срок. Дочерний grant не содержит identity.recover; срок до 30 суток и не дольше родителя. Административный scope не выдаётся, если его нет у родителя.
5. Сервер ещё раз проверяет родительский grant и membership под блокировкой при завершении challenge. Выдача ребёнка и потребление challenge транзакционны. Блокировка, отзыв или истечение не обходятся карточкой.
6. После выдачи устройства recovery seed/private key удаляется из сохраняемого record. Flutter сохраняет только device seed, root public key, публичные ID/pins и scopes-профиль. Browser сохраняет device CryptoKey и публичный root, а также зашифрованную копию карточки для повторного скачивания; recovery CryptoKey в IndexedDB не сохраняется. Для нового enrollment/отзыва других устройств карточка открывается заново.

Языки/runtime не обеспечивают полное обнуление всех временных копий секретов в памяти; не заявляем этого. Credential=root намеренно восстанавливает управляющий root, а не ограниченное рабочее устройство.

## Устройства и отзыв

ListDevices возвращает до 100 разрешений только своего principal, с публичными ключами, сроками, scopes, recovery-флагом, parent ID и отзывом. Персональные названия и полная пагинация истории ещё предстоят.

Устройство может отозвать собственный текущий grant через аутентифицированный RevokeCurrentDevice. Другие grants отзываются root-подписью или recovery.device.revoke, подписанным ключом карточки с authorizer_grant_id. Recovery key не отзывает чужой principal и не отзывает сам себя этим методом. Новый prefix — `space/recovery-device-revoke/v1\0`.

Отзыв recovery grant физически отзывает его прямые дочерние grants и удаляет их сессии. Parent validity проверяется также при обычном login, Authenticate и management authorization. Подготовленный до отзыва challenge не может выдать устройство после отзыва. Рабочий дочерний ключ не может повторно делегировать recovery; автоматическое root/recovery enrollment при отказе login отсутствует.

Миграция 5 добавляет parent_grant_id и signature_kind. Колонка root_signature историческая: при signature_kind=recovery в ней лежит подпись recovery key, а проверка цепочки использует parent grant с исходной root-подписью. Старые записи имеют signature_kind=root. Старые миграции не изменены.

## Существенные ограничения

Отзыв device grant закрывает этот grant и сессии, но **не отзывает копию исходного root secret**. Изначальный Flutter vault содержит root, а исходный browser key тоже имеет root authority. Если потерянное устройство скомпрометировало root, оно может намеренно зарегистрировать новое устройство; для устранения этого нужна ротация root, которая ещё не реализована. Аналогично утёкшая карточка+пароль требует отзыва recovery grant, а не только одного рабочего ребёнка. Производные рабочие устройства без управляющего секрета этого обхода не имеют.

Карточка панели требует сохранной серверной базы (root-signed grant/owner/membership). После срока 3650 суток делегированная карточка не восстанавливает доступ; выпуск новой требует исходного root. Потеря root и карточки не исправляется setup-кодом: bootstrap закрыт после назначения owner. Нет резервирования серверной БД, переноса origin, универсального master seed, QR, аппаратных credentials, one-time pairing и recovery history/E2EE keys. Для публичного deployment ещё нужен TLS-профиль.

## Проверка

PostgreSQL тесты: прежний principal, запрет второго recovery key, невозможность делегации ребёнком, ограничения scopes, cross-principal revoke, membership block, инвалидирование сессий и подготовленного challenge после отзыва карточки. Flutter: неверный пароль, повреждение AEAD, ограничение KDF и новые device keys. Сквозной тест WebCrypto → Dart и Dart → WebCrypto проверяет общий файл, восстановление прежнего owner, отсутствие управляющего секрета в рабочем vault, повторный вход, self revoke, отзыв старого grant и каскад recovery revoke. Реальный системный vault Windows и browser IndexedDB через перезапуски ещё требуют отдельного ручного сценария.
