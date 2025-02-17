const Course = require('../Models/Course.Model');

const HandlerCreateNewCourse = async(req,res)=>{
    const {course_id,course_name,fee,description} = req.body;
        if(!course_id || !course_name || !fee){
            return res.status(400).json({err:'All fields are required...'});
        }
        const course = await Course.create({course_id,course_name,fee,description});
        //console.log(course)
        return res.status(201).json({msg:'course created successfully'});
}

const HandlerGetAllCourse = async(req,res)=>{
    const course = await Course.find();
        if(!course){
            return res.status(400).json({err:'course not found'});
        }
        return res.json(course);
}

const HandlerGetById = async(req,res)=>{
    const course = await Course.find({course_id:req.params.id});
    console.log(course)
        if(!course){
            return res.status(400).json({err:'course not exists'});
        }
        //console.log("Okk")
        return res.json(course);
}

const HandlerUpdateById = async(req,res)=>{
    const course = await Course.updateOne({course_id:req.params.id},{$set:req.body});
        if(!course){
            return res.status(400).json({err:'data not update,Try Again'});
        }
        
        return res.status(200).json({msg:'course data updated'});
}

const HandlerDeleteById = async(req,res)=>{
    const course = await Course.deleteOne({course_id:req.params.id});
        if(!course){
            return res.status(404).json({err:'Try Again'});
        }
        return res.status(200).json({msg:'Deleted Succeessfully'});
}

module.exports ={
                    HandlerCreateNewCourse,
                    HandlerGetAllCourse,
                    HandlerGetById,
                    HandlerUpdateById,
                    HandlerDeleteById
                }