var express = require('express');
var router = express.Router();

const users2 = require('./users2');
const users3 = require('./users3');


router.use('/users2', users2);
router.use('/users3', users3);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;




