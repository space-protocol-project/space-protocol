#!/usr/bin/env bash
set -euo pipefail
mkdir -p dist
app=client/build/macos/Build/Products/Release/Space.app
test -d "$app"
stage=$(mktemp -d)
trap 'rm -rf "$stage"' EXIT
cp -R "$app" "$stage/Space.app"
ln -s /Applications "$stage/Applications"
output="dist/Space-macos-$(uname -m).dmg"
hdiutil create -volname Space -srcfolder "$stage" -ov -format UDZO "$output"
hdiutil verify "$output"
shasum -a 256 "$output" > dist/SHA256SUMS.txt
