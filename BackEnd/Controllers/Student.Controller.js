const Student = require('../Models/Student.Model');

const HandlerCreateNewStudent = async(req,res)=>{
     const {student_id,student_name,mobile,course} = req.body;
        if(!student_id ||!student_name || !mobile || !course){
            return res.status(400).json({err:'All fields are required...'});
        }
        const student = await Student.create({student_id,student_name,mobile,course});
        return res.status(201).json({msg:'Student created successfully'});
}

const HandlerGetAllStudent = async(req,res)=>{
    const student = await Student.find();
    
        if(!student){
            return res.status(400).json({err:'Student not found'});
        }
        return res.json(student);
}

const HandlerGetById = async(req,res)=>{
    const student = await Student.findOne({student_id:req.params.id});
    //console.log(student)
    if(!student){
        return res.status(400).json({err:'Student not Exists'})
    }
    return res.json(student)
}

const HandlerGetByCourseId = async(req,res)=>{
    const student = await Student.find({course:req.params.id});
    //console.log(student)
    //console.log("Requested ID:", req.params.id);
    if(!student){
        return res.status(400).json({err:'Student not Exists'})
    }
    return res.json(student)
}

const HandlerUpdateById = async(req,res)=>{
    const student = await Student.updateOne({student_id:req.params.id},{$set:req.body});
        if(!student){
            return res.status(400).json({err:'data not update,Try Again'});
        }
        return res.status(200).json({msg:'student data updated'});
}

const HandlerDeleteById = async(req,res)=>{
     const student = await Student.deleteOne({student_id:req.params.id});
        if(!student){
            return res.status(404).json({err:'Try Again'});
        }
        return res.status(200).json({msg:'Deleted Succeessfully'});
}

module.exports = {
                    HandlerCreateNewStudent,
                    HandlerGetAllStudent,
                    HandlerGetById,
                    HandlerGetByCourseId,
                    HandlerUpdateById,
                    HandlerDeleteById
                }