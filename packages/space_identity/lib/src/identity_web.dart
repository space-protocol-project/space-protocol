import 'dart:convert';
import 'dart:js_interop';

@JS('spaceAdminIdentity.login')
external JSPromise<JSString> _login(JSBoolean create);

Future<Map<String, dynamic>> browserIdentity({bool create = false}) async {
  final result = await _login(create.toJS).toDart;
  final data = jsonDecode(result.toDart) as Map<String, dynamic>;
  if (data['error'] is String) throw StateError(data['error']);
  return data;
}

@JS("spaceAdminIdentity.openLegacy")
external void openLegacyPanel();
