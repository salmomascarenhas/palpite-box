const { GoogleSpreadsheet } = require('google-spreadsheet');

const credentials = require('./credentials.json');

//AUTH
const doc = new GoogleSpreadsheet('1kTthCVmYP2fW6tjclXOqzUd0XBYlFk5cw56bw7eriJA');

const run = async () => {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();

    console.log(doc.title);
    const sheet = doc.sheetsByIndex[2];
    await sheet.loadCells('A3:B3');

    const mostrarPromocaoCell = sheet.getCell(2, 0);
    console.log(mostrarPromocaoCell.value);

    const textCell = sheet.getCell(2, 1);
    console.log(textCell.value);
}
run();
