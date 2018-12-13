Package.describe({
  name: 'dynamsoft:dbr',
  version: '6.4.1',
  summary: 'Dynamsoft Barcode Reader JavaScript edition enables you to embed barcode reading functionality in your web app',
  git: 'https://github.com/dynamsoft-dbr/barcode-js-package.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.0.1');
  api.addFiles([
    'dist/dynamsoft.barcode.min.js'
  ], 'client');
});

