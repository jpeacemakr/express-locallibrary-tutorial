var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is users2/index');
});

router.get('/cool', function(req, res, next) {
  res.send('this is users2/cool');
});



module.exports = router;
