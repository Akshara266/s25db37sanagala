var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Gadgets', { title: 'Search Results: Gadgets' });
});

module.exports = router;

var express = require('express');
const Gadgets_controlers= require('../controllers/Gadgets');
var router = express.Router();
/* GET Gadgets */
router.get('/', Gadgets_controlers.Gadgets_view_all_Page );
module.exports = router;