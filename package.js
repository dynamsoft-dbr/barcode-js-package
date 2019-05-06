Package.describe({
  name: 'dynamsoft:barcode',
  version: '6.5.1',
  summary: 'A JavaScript barcode library that enables you to build web barcode reader app',
  git: 'https://github.com/dynamsoft-dbr/barcode-js-package.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.0.1');
  api.addFiles([
    'dist/dynamsoft.barcode.min.js'
  ], 'client');
});

