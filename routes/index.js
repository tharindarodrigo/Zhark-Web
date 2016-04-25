var express = require('express');
var router = express.Router();
var passport = require('passport');

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
    if (req.isAuthenticated()) {
        res.redirect('auth/profile');
    } else {
        res.render('login');
    }
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

router.get('/logout', function (req, res) {
    req.logOut();
    res.redirect('/login');
});

router.get('/carousel', function (req, res) {
    res.render('carousel');
});

router.get('/control-panel', function (req, res) {
    res.render('control_panel');
});

router.get('/control-panel-img1', function (req, res) {
    res.render('img1');
});

router.get('/dashboard', function (req, res) {
    res.render('dashboard');
});
router.get('/devices', function (req, res) {
    res.render('devices');
});
router.get('/graph', function (req, res) {
    res.render('graph_morris');
});



module.exports = router;