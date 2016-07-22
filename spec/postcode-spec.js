const postCode = require('../main/postcode');

describe('postcode', () => {

    const barcode = '||:|:::|:|:|:::|:::||::||::|:|:|';
    const expectTransFormedCode = '957135';
    const expectPostcode = '95713';
    const correctBarcodeCode = postCode.checkBarCode(barcode);
    const allItems = [
        {
            item: {
                num: 1,
                barcode: ':::||'
            }
        },
        {
            item: {
                num: 2,
                barcode: '::|:|'
            }
        },
        {
            item: {
                num: 3,
                barcode: '::||:'
            }
        },
        {
            item: {
                num: 4,
                barcode: ':|::|'
            }
        },
        {
            item: {
                num: 5,
                barcode: ':|:|:'
            }
        },
        {
            item: {
                num: 6,
                barcode: ':||::'
            }
        },
        {
            item: {
                num: 7,
                barcode: '|:::|'
            }
        },
        {
            item: {
                num: 8,
                barcode: '|::|:'
            }
        },
        {
            item: {
                num: 9,
                barcode: '|:|::'
            }
        },
        {
            item: {
                num: 0,
                barcode: '||:::'
            }
        },
    ];
    const transFormedCode = postCode.transFormCode(allItems, correctBarcodeCode);
    const correctPostCode = postCode.checkPostCode(transFormedCode);
    const postcode = postCode.getPostCode(correctPostCode);

    it('should check postCode', () => {

        expect(correctBarcodeCode).toEqual(barcode);
    });

    it('should transFormCode', () => {
        expect(transFormedCode).toEqual(expectTransFormedCode);
    });

    it('should check transformedCode',() => {
        expect(correctPostCode).toEqual(expectTransFormedCode);
    });

    it('should getPostCode', () => {
        expect(postcode).toEqual(expectPostcode);
    });
});