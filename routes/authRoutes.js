var express = require('express');
var authRouter = express.Router();
var passport = require('passport');
var mongodb = require('mongodb').MongoClient;
var passwordHash = require('password-hash');

authRouter.route('/signup')
    .post(function (req, res) {
        console.log(req.body);

        var url = 'mongodb://thari:123456@ds019638.mlab.com:19638/test_thari';

        mongodb.connect(url, function (err, db) {
            var collection = db.collection('users');
            var groups =[];
            switch(req.body.group){
                case "user":
                    groups = ["user"];
                    break;
                case "powerUser":
                    groups = ['power_user', 'user'];
                    break;
                case "admin":
                    groups = ['admin', 'power_user', 'user'];
                    break;
            }

            var user = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                username: req.body.username,
                password: passwordHash.generate(req.body.password),
                email: req.body.email,
                group: groups
            };

            console.log(user);

            collection.insertOne(user, function (err, results) {
                //req.login(results.ops[0], function () {
                    res.redirect('/login');
                //});
            });
        });
    });

authRouter.route('/login').post(passport.authenticate('local', {
    failureRedirect: '/login'
}), function (req, res) {
    if (isMobileRequest(req)) {
        res.json(req.user);
    } else {
        res.redirect('/auth/profile');
    }
});

var isMobileRequest = function (req) {
    return req.body.mobile;
};


authRouter.route('/profile')
    .all(function (req, res, next) {
        if (!req.user) {
            res.redirect('/login');
        }
        next();
    })
    .get(function (req, res) {
        if (isMobileRequest(req)) {
            return res.json({
                user: req.user,
                token: "12fkoee4d8e6e"
            });
        } else {
            res.redirect('/profile');
        }
    });


module.exports = authRouter;