var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('Gadgets', { title: 'Search Results: Gadgets' });
});

module.exports = router;

var express = require('express');
const Gadgets_controlers = require('../controllers/Gadgets');
// A little function to check if we have an authorized user and continue on
// or  redirect to login.
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.redirect("/login");
}
var router = express.Router();
/* GET Gadgets */
router.get('/', Gadgets_controlers.Gadgets_view_all_Page);
/* GET detail Gadgets page */
router.get('/detail', Gadgets_controlers.Gadgets_view_one_Page);
/* GET create Gadgets page */
router.get('/create', Gadgets_controlers.Gadgets_create_Page);
/* GET create update page */
router.get('/update', Gadgets_controlers.Gadgets_update_Page);
/* GET delete Gadgets page */
router.get('/delete', Gadgets_controlers.Gadgets_delete_Page);
/* GET update Gadgets page */
router.get('/update', Gadgets_controlers.Gadgets_update_Page);
/* GET update Gadgets page */
router.get('/update', secured, Gadgets_controlers.Gadgets_update_Page);

module.exports = router;
