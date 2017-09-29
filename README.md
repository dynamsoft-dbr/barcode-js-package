# Dynamsoft Barcode Reader

## Overview
[Dynamsoft Barcode Reader](https://www.dynamsoft.com/Products/barcode-recognition-javascript.aspx) is a recognition SDK which enables you to embed barcode reading functionality in your web, desktop, and mobile application. Its JavaScript Edition is browser-based and designed for web applications. With just a few lines of JavaScript code, you can develop a robust application to scan a linear barcode, QR Code, DataMatrix, and PDF417.

## Supported Barcode Types
* 1D barcode: Code 39, Code 93, Code 128, Codabar, EAN-8, EAN-13, UPC-A, UPC-E, Interleaved 2 of 5 (ITF), Industrial 2 of 5 (Code 2 of 5 Industry, Standard 2 of 5, Code 2 of 5), ITF-14
* 2D barcode: QRCode, DataMatrix, and PDF417

## Supported Image Source Types
* Bmp, jpg, png, gif, and tiff image files; multi-page tiff also supported
* Windows DIB and .NET bitmap
* Black/white, grayscale or color
* PDF files

## Documentation

* [Developer's Guide](https://www.dynamsoft.com/Products/Barcode-Reader-Resources.aspx#dbrResourceGuide)
* [Sample Code](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Sample-Download.aspx)

## Quick Start

```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
    <script type="text/javascript" src="https://www.dynamsoft.com/library/dbr/dynamsoft.barcode.min.js"></script>
</head>
<body>
    <h1>Dynamsoft Barcode Reader: Linear, QRCode, PDF417 & DataMatrix</h1>
    <input type="file" id="fileToUpload"/><br>
    <input type="button" value="Read Barcode" onclick="doReadBarcode()" />
    <div id="resultBox"/>

    <script type="text/javascript">
        var dbrObject;
        function onInitSuccess() {dbrObject = new dynamsoft.dbrEnv.BarcodeReader();}
        function onInitError(errCode, errMsg) {alert(errMsg);}
        dynamsoft.dbrEnv.init(onInitSuccess, onInitError);

        function onBarcodeReadSuccess(userData, result) {
            var count = result.getCount();
            var strMsg = "";
            if (count > 0) {
                for (var i = 0; i < count; i++) {
                    strMsg += "<p>" + "Index: " + i + ". ";
                    strMsg += "Barcode Type: " + result.get(i).formatString + ", ";
                    strMsg += "Barcode Value: " + result.get(i).text + ".</p>";
                }
                document.getElementById('resultBox').innerHTML = strMsg;
            } else {alert("No barcode found.");}
        }

        function onBarcodeReadFailure(userData, errorCode, errorString) {alert(errorCode + errorString);}

        function doReadBarcode() {
            var file = document.getElementById("fileToUpload").files[0];
            dbrObject.readBinaryAsync(file, "tmp", onBarcodeReadSuccess, onBarcodeReadFailure);
    }
    </script>
</body>
</html>

```
