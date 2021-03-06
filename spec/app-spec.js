const app = require('../main/app');

describe('app', () => {

    const postCode = "95713";
    const correctCode = app.checkPostCode(postCode);
    const code = app.getCode(correctCode);
    var allItems = [
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
    const expectBarcode = app.buildBarcode(allItems, code);
    const barcode = '||:|:::|:|:|:::|:::||::||::|:|:|';
    it('should check postCode', () => {

        expect(correctCode).toEqual(postCode);
    });
    
    it('should get code', () => {
        expect(code).toEqual('957135');
    })

    it('should buildBarcode', () => {
        expect(expectBarcode).toEqual(barcode);
    })
    
    
    
});