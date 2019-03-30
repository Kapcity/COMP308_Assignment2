/*  
Name: Kapilan Santhiramohan
Date: Feb, 14, 2019
Standard BootStrap redirect routing 
*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');
/* Post to route to home Page */
router.post('/contact', (req, res, next) => {
  res.render('index', { title: 'Home' });
});


/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET project page. */
router.get('/projects', indexController.displayProjectPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET education page. */
router.get('/Education', indexController.displayEducationPage);

// get login page
router.get('/login', indexController.DisplayLogin);
// post request that process the login pages
router.post('/login', indexController.ProcessLogin);
// get to display user registration page
router.get('/register', indexController.DisplayReg);
//post request to process the registration page
router.post('/register', indexController.ProcessReg);
//get request log out
router.get('/logout', indexController.LoggoutPost);
module.exports = router;
