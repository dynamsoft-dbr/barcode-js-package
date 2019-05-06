# Dynamsoft Barcode Reader JavaScript Edition

## Overview
[Dynamsoft Barcode Reader JavaScript Edition](https://www.dynamsoft.com/Products/barcode-recognition-javascript.aspx) enables you to embed barcode reading functionality in your web, desktop, and mobile application. With just a few lines of JavaScript code, you can develop a robust application to scan a linear barcode, QR Code, DataMatrix, PDF417 and Aztec Code.

## Supported Barcode Types
* 1D barcode: Code 39, Code 93, Code 128, Codabar, EAN-8, EAN-13, UPC-A, UPC-E, Interleaved 2 of 5 (ITF), Industrial 2 of 5 (Code 2 of 5 Industry, Standard 2 of 5, Code 2 of 5), ITF-14
* 2D barcode: QRCode, DataMatrix, PDF417 and Aztec Code

## Documentation
https://www.dynamsoft.com/help/Barcode-Reader-wasm/index.html

## Installation

```
bower install dbr
```

## Quick Start
Include `dbr.min.js` into your HTML page:

```js
<script src="bower_components/dbr/dist/dbr.min.js"></script>
```

Create a simple web barcode reader:
```html
<!DOCTYPE html>
<html>
<body>
    <script src="bower_components/dbr/dist/dbr.min.js"></script>
    <script>
        //https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx
        BarcodeReader.licenseKey = 'LICENSE-KEY';
        let scanner = new BarcodeReader.Scanner({
            onFrameRead: results => {console.log(results);},
            onNewCodeRead: (txt, result) => {alert(txt);}
        });
        scanner.open();
    </script>
</body>
</html>

```

Host your project via [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en).

## Online Demo
https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html

## License
Get a [FREE 30-day trial license](https://www.dynamsoft.com/CustomerPortal/Portal/Triallicense.aspx).

## Contact Us
https://www.dynamsoft.com/Company/Contact.aspx

## License Agreement
https://www.dynamsoft.com/Products/barcode-reader-license-agreement.aspx