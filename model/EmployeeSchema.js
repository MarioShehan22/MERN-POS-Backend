const mongoose = require('mongoose');
const EmployeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    position:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('employee', EmployeeSchema);