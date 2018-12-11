# Dynamsoft Barcode Reader

## Overview
[Dynamsoft Barcode Reader](https://www.dynamsoft.com/Products/barcode-recognition-javascript.aspx) is a recognition SDK which enables you to embed barcode reading functionality in your web, desktop, and mobile application. Its JavaScript Edition is browser-based and designed for web applications. With just a few lines of JavaScript code, you can develop a robust application to scan a linear barcode, QR Code, DataMatrix, PDF417 and Aztec Code.

## Supported Barcode Types
* 1D barcode: Code 39, Code 93, Code 128, Codabar, EAN-8, EAN-13, UPC-A, UPC-E, Interleaved 2 of 5 (ITF), Industrial 2 of 5 (Code 2 of 5 Industry, Standard 2 of 5, Code 2 of 5), ITF-14
* 2D barcode: QRCode, DataMatrix, and PDF417

## Supported Image Source Types
* Bmp, jpg, png, gif, and tiff image files; multi-page tiff also supported
* Windows DIB and .NET bitmap
* Black/white, grayscale or color
* PDF files

## Documentation

* [API Reference](https://www.dynamsoft.com/help/Barcode-Reader-wasm/)
* [Sample Code](https://github.com/dynamsoft-dbr/javascript-barcode)

## Quick Start

```html
<!DOCTYPE html>
<html>
<body>
    <div id="divLoadInfo">loading...</div>
    <input id="uploadImage" type="file" accept="image/bmp,image/jpeg,image/png,image/gif" style="display:none">
    <script src="https://demo.dynamsoft.com/dbr_wasm/js/dbr-6.4.1.1.min.js"></script>
    <script>
        dynamsoft.dbrEnv.resourcesPath = 'https://demo.dynamsoft.com/dbr_wasm/js';
        var reader = null;
        var iptEl = document.getElementById('uploadImage');
        dynamsoft.dbrEnv.onAutoLoadWasmSuccess = function(){
            reader = new dynamsoft.BarcodeReader();
            iptEl.style.display = '';
            document.getElementById('divLoadInfo').innerHTML="load dbr wasm success.";
        };
        dynamsoft.dbrEnv.onAutoLoadWasmError = function(ex){
            document.getElementById('divLoadInfo').innerHTML="load wasm failed: "+(ex.message || ex);
        };
        
        //https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx
        dynamsoft.dbrEnv.licenseKey = "t0068MgAAAITeFdSNvIYpkFMgjUw9+ssQhJwCsd78AhMIVO6NOdYfu1TQcDLwJvtO7y5bgYrZZXrq11jkf5UVL5Y5CVpb9nU=";
        
        iptEl.addEventListener('change', function(){
            reader.decodeFileInMemory(this.files[0]).then(function(results){
                var txts = [];
                for(var i=0;i<results.length;++i){
                    txts.push(results[i].BarcodeText);
                }
                alert(txts.join("\n"));
            }).catch(ex => {
                alert('error:' + (ex.message || ex));
            });
            this.value = '';
        });
    </script>
</body>
</html>

```
