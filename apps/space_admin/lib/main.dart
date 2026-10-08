import 'package:flutter/material.dart';
import 'package:flutter/semantics.dart';
import 'package:space_api/space_api.dart';
import 'package:space_identity/space_identity.dart';
import 'package:space_ui/space_ui.dart';
import 'package:space_admin_ui/space_admin_ui.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  SemanticsBinding.instance.ensureSemantics();
  runApp(const SpaceAdminApp());
}

class SpaceAdminApp extends StatelessWidget {
  const SpaceAdminApp({
    super.key,
    this.login = browserIdentity,
    this.gateway = SpaceGateway.new,
  });
  final IdentityLogin login;
  final SpaceGateway Function(Uri) gateway;
  @override
  Widget build(BuildContext context) => MaterialApp(
    title: 'Space Admin',
    theme: spaceAdminTheme(),
    home: AdminPage(
      login: login,
      gateway: gateway,
      openLegacy: () => openLegacyPanel(),
    ),
  );
}
