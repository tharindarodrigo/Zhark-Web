var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/dashboard', function (req, res, next) {
    res.render('dashboard');
});

router.get('/login', function (req, res, next) {
    res.render('login');
});

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