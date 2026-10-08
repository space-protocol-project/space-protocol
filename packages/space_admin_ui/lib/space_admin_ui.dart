import 'package:flutter/material.dart';
import 'package:space_api/space_api.dart';

typedef IdentityLogin = Future<Map<String, dynamic>> Function({bool create});

class AdminPage extends StatefulWidget {
  const AdminPage({
    super.key,
    required this.login,
    required this.gateway,
    this.openLegacy,
    this.autoConnect = false,
    this.allowLogout = true,
    this.allowIdentityCreation = true,
    this.onClose,
  });
  final IdentityLogin login;
  final VoidCallback? openLegacy, onClose;
  final bool autoConnect, allowLogout, allowIdentityCreation;
  final SpaceGateway Function(Uri) gateway;
  @override
  State<AdminPage> createState() => _AdminPageState();
}

class _AdminPageState extends State<AdminPage> {
  @override
  void initState() {
    super.initState();
    if (widget.autoConnect)
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (mounted) run(() => signIn(false));
      });
  }

  SpaceGateway? api;
  Map<String, dynamic>? identity, settings;
  bool busy = false, consent = false, initialized = true, enabled = true;
  String status = '', policy = 'open';
  final title = TextEditingController(),
      chat = TextEditingController(),
      code = TextEditingController();
  Future<void> run(Future<void> Function() action) async {
    if (busy) return;
    setState(() => busy = true);
    try {
      await action();
    } catch (e) {
      status = e is SpaceApiError && e.status == 409
          ? 'Настройки уже изменены. Загрузите их заново и повторите изменения.'
          : e.toString().replaceFirst('Bad state: ', '');
    } finally {
      if (mounted) setState(() => busy = false);
    }
  }

  Future<Map<String, dynamic>> call(
    String path, {
    Map<String, dynamic>? body,
    String? method,
  }) async {
    if (identity == null || api == null) throw StateError('Сначала войдите');
    if (DateTime.now().millisecondsSinceEpoch ~/ 1000 >
        (identity!['expires'] as num) - 15) {
      final next = await widget.login(create: false);
      if (next['principalId'] != identity!['principalId'] ||
          next['serverId'] != identity!['serverId']) {
        throw StateError('Идентичность изменилась. Войдите заново');
      }
      identity = next;
    }
    return api!.call(
      path,
      token: identity!['token'] as String,
      body: body,
      method: method,
    );
  }

  Future<void> signIn(bool create) async {
    final next = await widget.login(create: create);
    if (!mounted) return;
    api?.close();
    api = widget.gateway(Uri.parse(next['origin'] as String));
    identity = next;
    if (next['blocked'] == true) {
      throw StateError('Доступ к пространству заблокирован');
    }
    final setup = await call('/api/v1/space/setup');
    initialized = setup['initialized'] == true;
    if (!initialized) {
      status = 'Устройство вошло. Укажите одноразовый код сервера для назначения владельца.';
      return;
    }
    if (!['owner', 'admin'].contains(next['role'])) {
      status = 'Вход выполнен, но ваша роль не разрешает настройку сервера.';
      return;
    }
    await load();
  }

  Future<void> load() async {
    final data = await call('/api/v1/space/settings');
    if (!mounted) return;
    settings = data['settings'] as Map<String, dynamic>;
    title.text = settings!['title'] as String;
    chat.text = settings!['chatTitle'] as String;
    enabled = settings!['chatEnabled'] == true;
    policy = settings!['registrationPolicy'] as String;
    status = 'Настройки загружены с сервера.';
  }

  Future<void> save() async {
    if (title.text.trim().isEmpty || chat.text.trim().isEmpty) {
      throw StateError('Укажите оба названия');
    }
    final data = await call(
      '/api/v1/space/settings',
      method: 'PATCH',
      body: {
        'title': title.text.trim(),
        'chatTitle': chat.text.trim(),
        'chatEnabled': enabled,
        'registrationPolicy': policy,
        'expectedRevision': settings!['revision'],
      },
    );
    settings = data['settings'] as Map<String, dynamic>;
    status = 'Настройки сохранены на сервере.';
  }

  Future<void> logout() async {
    try {
      await call('/api/v1/auth/logout', body: {});
    } catch (e) {
      if (e is! SpaceApiError || e.status != 401) rethrow;
    }
    identity = null;
    settings = null;
    code.clear();
    api?.close();
    api = null;
    status = 'Сессия закрыта. Ключи остались в браузере.';
  }

  @override
  void dispose() {
    api?.close();
    title.dispose();
    chat.dispose();
    code.dispose();
    super.dispose();
  }

  Widget card(List<Widget> children) => Card(
    color: Theme.of(context).colorScheme.surface,
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
    child: Padding(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: children,
      ),
    ),
  );
  Widget button(String label, Future<void> Function() action) => FilledButton(
    onPressed: busy ? null : () => run(action),
    child: Text(label),
  );
  @override
  Widget build(BuildContext context) => Scaffold(
    body: SafeArea(
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 900),
          child: ListView(
            padding: const EdgeInsets.all(20),
            children: [
              if (widget.onClose != null)
                Align(
                  alignment: Alignment.centerRight,
                  child: IconButton(
                    onPressed: widget.onClose,
                    tooltip: 'Закрыть управление',
                    icon: const Icon(Icons.close),
                  ),
                ),
              const Text(
                'Управление пространством',
                style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
              ),
              const Padding(
                padding: EdgeInsets.symmetric(vertical: 12),
                child: Text('Ваш сервер. Ваши правила.'),
              ),
              const Text(
                'Первый срез управления: настройки сервера. Остальные разделы переносятся постепенно.',
              ),
              const SizedBox(height: 20),
              if (identity == null)
                card([
                  const Text(
                    'Вход по ключу устройства',
                    style: TextStyle(fontSize: 20),
                  ),
                  const SizedBox(height: 12),
                  Text(
                    widget.autoConnect
                        ? 'Используется идентичность текущего подключения. Дополнительный аккаунт не нужен.'
                        : 'Используются ключи текущей панели в этом браузере. Перенос и восстановление доступны по ссылке ниже.',
                  ),
                  const SizedBox(height: 16),
                  button('Войти с сохранёнными ключами', () => signIn(false)),
                  if (widget.allowIdentityCreation)
                    CheckboxListTile(
                      contentPadding: EdgeInsets.zero,
                      value: consent,
                      onChanged: busy
                          ? null
                          : (v) => setState(() => consent = v ?? false),
                      title: const Text(
                        'Создать отдельную идентичность в этом браузере. Это не перенос существующего аккаунта.',
                      ),
                    ),
                  if (widget.allowIdentityCreation)
                    OutlinedButton(
                      onPressed: busy || !consent
                          ? null
                          : () => run(() => signIn(true)),
                      child: const Text('Создать идентичность и войти'),
                    ),
                ]),
              if (identity != null && !initialized)
                card([
                  const Text(
                    'Назначить первого владельца',
                    style: TextStyle(fontSize: 20),
                  ),
                  const Text(
                    'Получите код в консоли сервера: space-server -setup-code. Он действует 15 минут.',
                  ),
                  const SizedBox(height: 16),
                  TextField(
                    controller: code,
                    obscureText: true,
                    decoration: const InputDecoration(
                      labelText: 'Одноразовый код сервера',
                    ),
                  ),
                  const SizedBox(height: 16),
                  button('Подтвердить владение', () async {
                    final value = code.text;
                    code.clear();
                    await call(
                      '/api/v1/space/setup/claim',
                      body: {'setupCode': value},
                    );
                    initialized = true;
                    identity!['role'] = 'owner';
                    await load();
                  }),
                ]),
              if (settings != null)
                card([
                  Text(
                    'Настройки пространства · версия ${settings!['revision']}',
                    style: const TextStyle(fontSize: 20),
                  ),
                  const SizedBox(height: 20),
                  TextField(
                    controller: title,
                    maxLength: 80,
                    decoration: const InputDecoration(
                      labelText: 'Название пространства',
                    ),
                  ),
                  const SizedBox(height: 12),
                  TextField(
                    controller: chat,
                    maxLength: 80,
                    decoration: const InputDecoration(
                      labelText: 'Название общего чата',
                    ),
                  ),
                  SwitchListTile(
                    contentPadding: EdgeInsets.zero,
                    value: enabled,
                    onChanged: busy ? null : (v) => setState(() => enabled = v),
                    title: const Text('Чаты доступны участникам'),
                    subtitle: const Text(
                      'Выключение закрывает чтение и отправку. История сохраняется.',
                    ),
                  ),
                  DropdownButtonFormField<String>(
                    key: ValueKey(policy),
                    initialValue: policy,
                    decoration: const InputDecoration(labelText: 'Регистрация'),
                    items: const [
                      DropdownMenuItem(value: 'open', child: Text('Открыта')),
                      DropdownMenuItem(
                        value: 'closed',
                        child: Text('По приглашению'),
                      ),
                    ],
                    onChanged: busy ? null : (v) => setState(() => policy = v!),
                  ),
                  const SizedBox(height: 20),
                  Wrap(
                    spacing: 12,
                    runSpacing: 12,
                    children: [
                      button('Сохранить настройки', save),
                      OutlinedButton(
                        onPressed: busy ? null : () => run(load),
                        child: const Text('Загрузить заново'),
                      ),
                    ],
                  ),
                ]),
              if (identity != null && widget.allowLogout)
                Padding(
                  padding: const EdgeInsets.only(top: 16),
                  child: button('Выйти', logout),
                ),
              if (busy)
                const Padding(
                  padding: EdgeInsets.all(16),
                  child: LinearProgressIndicator(),
                ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 16),
                child: Text(status, key: const ValueKey('admin-status')),
              ),
              if (widget.openLegacy != null)
                TextButton(
                  onPressed: busy ? null : widget.openLegacy,
                  child: const Text('Открыть текущую панель /space'),
                ),
              if (widget.openLegacy != null)
                const Text(
                  'Текущая панель: /space — каналы, права, приглашения, устройства и восстановление. Откройте этот адрес на том же сервере.',
                ),
            ],
          ),
        ),
      ),
    ),
  );
}
