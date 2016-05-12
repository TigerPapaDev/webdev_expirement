/**
 * Created by monodev on 16/5/12.
 */
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    pwd:String
});

module.exports =mongoose.model('User', userSchema);