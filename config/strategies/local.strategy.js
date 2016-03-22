var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongodb = require('mongodb').MongoClient;

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
                    if (results.password === password) {
                        console.log('shape');
                        var user = results;
                        done(null, user);
                    } else {
                        done(null, false, {
                            message: 'Bad Password'
                        });
                    }

                });
            });

        }));
};