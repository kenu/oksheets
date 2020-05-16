var express = require('express');
var router = express.Router();
var sheetdb = require('./sheetdb');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const sheet = await sheetdb.getSheet();
  const result = { title: sheet.title };
  res.render('index', { title: 'Express' + JSON.stringify(result) });
});

module.exports = router;
