import { GoogleSpreadsheet } from 'google-spreadsheet';
import moment from 'moment';

import { fromBase64 } from '../../utils/base64';


//AUTH
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

const couponGen = () => {
    const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase();

    return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4);
}

export default async (req, res) => {
    try {

        const { Nome, Email, Whatsapp, Nota } = JSON.parse(req.body);
        let Cupom = '';
        let Promo = '';

        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHEET_PRIVATE_KEY,
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[1];
        const sheetConfig = doc.sheetsByIndex[2];

        await sheetConfig.loadCells('A3:B3');
        const mostrarPromocaoCell = sheetConfig.getCell(2, 0);
        const textCell = sheetConfig.getCell(2, 1);


        if (mostrarPromocaoCell.value === 'Verdadeiro') {
            Cupom = couponGen();
            Promo = textCell.value;
        }

        //Nome Email Whatsapp Cupom Promo
        await sheet.addRow({
            Nome,
            Email,
            Whatsapp,
            Nota,
            Cupom,
            Promo,
            Data: moment().format('DD/MM/YY  HH:mm:ss')
        });

        res.end(JSON.stringify({
            showCoupon: Cupom !== '',
            Cupom,
            Promo
        }));
    }
    catch (error) {
        res.end(error);
    }
}