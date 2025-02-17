const mongoose  = require('mongoose');

const courseSchema = mongoose.Schema({
    course_id:{
        type:String,
        required:true
    },
    course_name:{
        type:String,
        required:true
    },
    fee:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model('Course',courseSchema);