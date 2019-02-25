/*  
Name: Kapilan Santhiramohan
Date: Feb, 14, 2019
Standard BootStrap redirect routing 
*/

let express = require('express');
let router = express.Router();


/* Post to route to home Page */
router.post('/contact', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', {title: 'About Me'});
});

/* GET project page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

/* GET education page. */
router.get('/Education', function(req, res, next) {
  res.render('index', { title: 'Education' });
});

module.exports = router;
