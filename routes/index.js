var express = require('express');
var router = express.Router();
var sheetdb = require('./sheetdb');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const sheet = await sheetdb.getSheet();
  const rows = await sheet.getRows();
  console.log(rows.length);
  const names = rows.map((row) => {
    return `${row['Student Name']}`;
  });
  res.render('index', { title: 'Express ', names: names });
});

module.exports = router;
