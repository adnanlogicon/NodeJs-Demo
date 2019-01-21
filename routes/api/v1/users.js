var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hello Get first api in node js');
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('hello Post first api in node js');
});

module.exports = router;
