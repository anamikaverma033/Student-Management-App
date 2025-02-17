const mongoose  = require('mongoose');

const feeSchema = mongoose.Schema({
    student_id:{
        type:String,
        required:true
    },
    feeCollection:{
        type:Number,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model('fee',feeSchema);