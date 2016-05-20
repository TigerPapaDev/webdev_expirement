var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Define User schema
var _User = new Schema({
    name : String,
    salt : String,
    password : String,
    regisDate:Date,
    lastLogin:Date
});
// export them
exports.User = mongoose.model("User", _User);