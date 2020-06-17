const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const UserSchema = new Schema({
    username: { type:String,required: true },
    password: { type:String,required: true },
    email: { type:String,required: true },
    role: { type:String,required: true },
    firstname: { type:String,required: true },
    lastname: { type:String,required: true },
    profileimg: { type:String,required: true },
    date : {   type:Date, default: Date.now}
    
});

module.exports = User = mongoose.model('user', UserSchema);