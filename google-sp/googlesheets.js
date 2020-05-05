// https://www.npmjs.com/package/google-spreadsheet
// Basic Example

const { GoogleSpreadsheet } = require('google-spreadsheet');

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet('<the sheet ID from the url>');

async function doiT() {
  // use service account creds
  // simply go in your browser to the Google sheet you want to interact with
  // go to SHARE on the top right of your screen
  // go to advanced settings and share it with email address of your service account
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });
  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);
  await doc.updateProperties({ title: 'renamed doc' });

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  console.log(sheet.title);
  console.log(sheet.rowCount);

  // adding / removing sheets
  const newSheet = await doc.addSheet({ title: 'hot new sheet2' });
  await newSheet.delete();
}

doiT();

