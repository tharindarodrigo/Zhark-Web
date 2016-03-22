var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

//router.get('/dashboard', function (req, res, next) {
//    res.render('dashboard');
//});


/**----------------------------
 * Login And Authentication
 **-----------------------------*/

router.get('/register', function (req, res, next) {
    res.render('register');
});

router.get('/login', function (req, res, next) {
    res.render('login');
});

/**----------------------------
 * End Login And Authentication
 **-----------------------------*/

router.get('/profile', function (req, res, next) {
    res.render('profile');
});

router.get('/form_advanced', function (req, res, next) {
    res.render('form_advanced');
});

router.get('/form_basic', function (req, res, next) {
    res.render('form_basic');
});

module.exports = router;