const { GoogleSpreadsheet } = require('google-spreadsheet');

const credentials = require('./credentials.json');

//AUTH
const doc = new GoogleSpreadsheet('1kTthCVmYP2fW6tjclXOqzUd0XBYlFk5cw56bw7eriJA');

const run = async () => {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();

    console.log(doc.title);
    const sheet = doc.sheetsByIndex[1];

    //Nome Email Whatsapp Cupom Promo
    await sheet.addRow({
        Nome: 'Salmo',
        Email: 'salmo.cruz@gmail.com',
        Whatsapp: '88 993017866',
        Cupom: 'aaa',
        Promo: 'aaa000'
    })
}

run();
