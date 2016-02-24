/**
 * Dependencies
 * @type {*|exports|module.exports}
 */
var restful = require('node-restful');
var mongoose = restful.mongoose;

/**
 * Schema
 */
var userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    active: Boolean
});

/**
 * Export Model
 */
module.exports = restful.model('user', userSchema);