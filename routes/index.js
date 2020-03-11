var express = require('express');
var router = express.Router();

const users2 = require('./users2');
const users3 = require('./users3');

//testing routes with nested folders
router.use('/users2', users2);
router.use('/users3', users3);

/* old GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/


// new GET home page redirects to catalog.
router.get('/', function(req, res) {
  res.redirect('/catalog');
});



module.exports = router;




