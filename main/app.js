'use strict';

function checkPostCode(postCode) {
    const postCodeArr = postCode.split('-');

    let code = postCodeArr.length > 1 ? postCodeArr[0] + postCodeArr[1] : postCodeArr[0];
    if ((typeof (parseInt(code)) === 'number') && (code.length === 5 || code.length === 9)) {
        return code;
    }
    else
        return false;
}

function getCode(code) {
    const sum = code.split('').reduce((previousValue, currentValue) => {
        return parseInt(previousValue) + parseInt(currentValue);
    });

    return code.concat(10 - sum % 10)
}

function buildBarcode(allItems, code) {
    let barcodes = [];
    const codes = code.split('');
    for (let codeItem of codes) {
        codeItem = parseInt(codeItem);
        var barcodeItem = allItems.find(items => items.item.num === codeItem);
        barcodes.push(barcodeItem.item.barcode);
    }
    let barcode = barcodes.join("");

    return '|' + barcode.toString() + '|';
}

module.exports = {checkPostCode, getCode, buildBarcode};