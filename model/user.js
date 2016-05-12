/**
 * Created by monodev on 16/5/12.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema();

var userSchema = new schema({
    name: String,
    pwd:String
});

module.exports =mongoose.model('User', userSchema);