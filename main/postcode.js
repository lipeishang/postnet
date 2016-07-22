'use strict';

function checkBarCode(barcode) {
    const barCodes = barcode.split('');
    let barcodes;
    const checkBarcode = barCodes.filter(barCode => {
        barCode === ('|' || ':')
    });
    barcodes = checkBarcode.length ? false : barcode;

    return barcodes;
}

function transFormCode(allItems, barCode) {
    const barCodeArr = barCode.slice(1, barCode.length - 1);
    let spliteddBarcodeArr = [];
    let codes = [];
    let postCodes;

    for (let i = 0; i < barCodeArr.length; i = i + 5) {
        spliteddBarcodeArr.push(barCodeArr.slice(i, i + 5));
    }
    for (let spliteddBarcode of spliteddBarcodeArr) {
        let barcodeItem = allItems.find(items => items.item.barcode === spliteddBarcode.toString());

        codes.push(barcodeItem.item.num);
    }
    postCodes = codes.join("");

    return postCodes;
}

function checkPostCode(postCodes) {
    const postCode = postCodes.slice(0, postCodes.length - 1);
    const checkCode = postCodes.slice(postCodes.length - 1, postCodes.length);
    const sum = postCode.split('').reduce((previousValue, currentValue) => {
        return parseInt(previousValue) + parseInt(currentValue);
    });

    if (!((sum + parseInt(checkCode)) % 10)) {
        return postCodes;
    }
    else return false;
}

function getPostCode(postcodes) {
    if (postcodes.length > 6) {
        return postcodes.slice(0, 4).concat(postcodes.slice(5, 8))
    }
    else return postcodes.slice(0, postcodes.length - 1);
}

module.exports = {checkBarCode, transFormCode, checkPostCode, getPostCode};
