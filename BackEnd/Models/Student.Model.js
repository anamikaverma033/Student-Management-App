const mongoose  = require('mongoose');

const studentSchema = mongoose.Schema({
    student_id:{
        type:String,
        required:true
    },
    student_name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
},{timestamps:true});

module.exports = mongoose.model('Student',studentSchema);