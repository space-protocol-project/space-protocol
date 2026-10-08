import 'package:flutter/material.dart';

ThemeData spaceAdminTheme() {
  const surface = Color(0xFF282828),
      raised = Color(0xFF32302F),
      text = Color(0xFFEBDBB2),
      accent = Color(0xFFFABD2F);
  final colors =
      ColorScheme.fromSeed(
        seedColor: accent,
        brightness: Brightness.dark,
      ).copyWith(
        primary: accent,
        onPrimary: surface,
        surface: surface,
        onSurface: text,
        surfaceContainer: raised,
        surfaceContainerHigh: raised,
        surfaceContainerHighest: const Color(0xFF504945),
        surfaceTint: Colors.transparent,
        onSurfaceVariant: const Color(0xFFBDAE93),
        outline: const Color(0xFF928374),
      );
  return ThemeData(
    fontFamily: "Noto Sans",
    useMaterial3: true,
    colorScheme: colors,
    scaffoldBackgroundColor: const Color(0xFF1D2021),
    cardTheme: const CardThemeData(
      margin: EdgeInsets.zero,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(12)),
      ),
    ),
    inputDecorationTheme: InputDecorationTheme(
      filled: true,
      fillColor: raised,
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
    ),
  );
}
