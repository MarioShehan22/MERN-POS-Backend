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

const Employee = mongoose.model('employee', EmployeeSchema);
module.exports = Employee;
