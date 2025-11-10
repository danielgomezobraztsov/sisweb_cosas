var express = require('express');
var router = express.Router();

const items = [
  { img: '/images/toyota_cresta.jpg', text: 'Toyota Cresta'},
  { img: '/images/maita_nb.jpg', text: 'Mazda Miata NB'},
  { img: '/images/e39.jpg', text: 'BMW e39 m5'}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', items: items });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

module.exports = router;
