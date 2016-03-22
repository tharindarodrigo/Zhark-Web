var express = require('express');
var authRouter = express.Router();
var passport = require('passport');
var mongodb = require('mongodb').MongoClient;


//authRouter.post('/signup', function(req, res){
//    console.log(req.body);
//    return res.json('hello');
//});

var router = function () {
    //authRouter.route('/signup')
    //    .post(function (req, res) {
    //        console.log(req.body);
    //        res.json('helllo how areYOu');
    //        //req.login(req.body, function () {
    //        //    res.redirect('/auth/profile');
    //        //});
    //    });

    authRouter.route('/profile')
        .get(function (req, res) {
            res.json("hello");
        });

    return authRouter;
};

authRouter.route('/signup')
    .post(function (req, res) {
        console.log(req.body);

        var url = 'mongodb://thari:123456@ds019638.mlab.com:19638/test_thari';

        mongodb.connect(url, function (err, db) {
            var collection = db.collection('users');
            var user = {
                username: req.body.username,
                password: req.body.password
            };

            collection.insert(user, function (err, results) {
                req.login(results.ops[0], function () {
                    res.redirect('/login');
                });
            });
        });
    });

authRouter.route('/login').post(passport.authenticate('local', {
    failureRedirect: '/login'
}), function (req, res) {
    res.redirect('/auth/profile');
});

authRouter.route('/profile')
    .all(function (req, res, next) {
        if (!req.user) {
            res.redirect('/login');
        }
        next();
    })
    .get(function (req, res) {
        res.send(req.user);
    });


module.exports = authRouter;