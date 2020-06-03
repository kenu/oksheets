var express = require('express');
var router = express.Router();
var sheetdb = require('./sheetdb');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const info = { sheetId: '1XruXewOawDgPC4CcrtDBNqUyFwdDttJk-wh0tyS9A_I', index: 1 };
  const sheet = await sheetdb.getSheet(info);
  const rows = await sheet.getRows();
  console.log(rows.length);
  const items = rows.map((row) => {
    return row;
  });
  res.render('index', { title: 'Express ', items: items });
});

module.exports = router;
