const sheetdb = require('../lib/sheetdb');
const pageId = '928209944';
const sheetId = '1BRwRD8iVQzqL7xP_5kcvhWbQxxxxxxxxxxfjZ6fIU';
const info = { sheetId, id: pageId };

async function doIt() {
  const sheet = await sheetdb.getSheet(info);
  // const rows = await sheet.getRows();

  console.log(sheet);
}
try {
  doIt();
} catch (e) {
  console.log(e);
}
