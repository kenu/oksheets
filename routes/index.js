var express = require('express');
var router = express.Router();
// https://www.npmjs.com/package/google-spreadsheet
// Basic Example

const { GoogleSpreadsheet } = require('google-spreadsheet');

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet('1TdtiBmqIrfxLgm-eO1m8zwXMOfr-naGObca8pHauFUs');

async function doiT() {
  const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n');
  // use service account creds
  // simply go in your browser to the Google sheet you want to interact with
  // go to SHARE on the top right of your screen
  // go to advanced settings and share it with email address of your service account
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: PRIVATE_KEY,
  });
  await doc.loadInfo(); // loads document properties and worksheets

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  return { title: sheet.title, count: sheet.rowCount };
}

/* GET home page. */
router.get('/', async function (req, res, next) {
  const result = await doiT();
  res.render('index', { title: 'Express' + JSON.stringify(result) });
});

module.exports = router;
