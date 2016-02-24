/**
 * Dependencies
 */

var express = require('express');
var router = express.Router();

/**
 * Model
 */
var User = require('../models/user');

/**
 * Routes
 */

User.methods(['get','post','put','delete']);
User.register(router, '/users');

/**
 * Exports
 */
module.exports = router;