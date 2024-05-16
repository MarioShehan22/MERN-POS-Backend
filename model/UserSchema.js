const mongoose = require('mongoose');
const UserSchema= new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    activeState:{
        type:Boolean,
        required:true
    }
});
const User = mongoose.model('user', UserSchema);
module.exports = User;
