var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongodb = require('mongodb').MongoClient,
    passwordHash = require('password-hash');


module.exports = function () {
    passport.use(new LocalStrategy({
            userNameField: 'username',
            passwordField: 'password'
        },
        function (username, password, done) {

            var url = 'mongodb://thari:123456@ds019638.mlab.com:19638/test_thari';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('users');
                collection.findOne({
                    username: username
                }, function (err, results) {
                    if (passwordHash.verify(password,results.password)) {
                        console.log('shape');
                        var user = results;
                        done(null, user);
                    } else {

                        done(null, null, {
                            message: 'Bad Password'
                        });
                    }
                });
            });
        }));
};