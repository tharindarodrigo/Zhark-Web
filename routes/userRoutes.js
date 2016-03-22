var express = require('express');
var userRouter = express.Router();

/* GET users listing. */


userRouter.use(function (req, res, next) {
    if (!req.user) {
        res.redirect('/login');
    }
    next();
});

userRouter.get('/', function (req, res, next) {
    res.send('User Router');
});

userRouter.get('/:id', function (req, res) {
    res.send('This is user ' + req.params.id)
});

userRouter.get('/:id/edit', function (req, res) {
    res.send('Edit user ' + req.params.id)
});


module.exports = userRouter;


