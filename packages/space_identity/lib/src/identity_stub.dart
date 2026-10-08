Future<Map<String, dynamic>> browserIdentity({bool create = false}) async {
  throw UnsupportedError('Браузерная авторизация недоступна на этой платформе');
}

void openLegacyPanel() {
  throw UnsupportedError("Нужен браузер");
}
