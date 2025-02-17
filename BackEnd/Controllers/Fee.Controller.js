const Fee = require('../Models/Fee.Model');

const HandlerCreateNewFee = async(req,res)=>{
     const {student_id,feeCollection} = req.body;
        if(!student_id || !feeCollection){
             return res.status(400).json({err:'All fields are required...'});
         }
        const fee = await Fee.create({student_id,feeCollection});
        //console.log(fee,'Created fee');
        return res.status(201).json({msg:'fee created successfully'});
}

const HandlerGetAllFee = async(req,res)=>{
    const fee = await Fee.find();
        if(!fee){
            return res.status(400).json({err:'fee not found'});
        }
        return res.json(fee);
}

const HandlerGetById = async(req,res)=>{
     const fee = await Fee.find({student_id:req.params.id});
        if(!fee){
            return res.status(400).json({err:'fee not exists'});
        }
        
        return res.json(fee);   
}

const HandlerUpdateById = async(req,res)=>{
     const fee = await Fee.updateOne({student_id:req.params.id},{$set:req.body});
        if(!fee){
            return res.status(400).json({err:'data not update,Try Again'});
        }
        return res.status(200).json({msg:'fee data updated'});
}

const HandlerDeleteById = async(req,res)=>{
    const fee = await Fee.deleteOne({student_id:req.params.id});
        if(!fee){
            return res.status(404).json({err:'Try Again'});
        }
        return res.status(200).json({msg:'Deleted Succeessfully'});
}

module.exports = {
                    HandlerCreateNewFee,
                    HandlerGetAllFee,
                    HandlerGetById,
                    HandlerUpdateById,
                    HandlerDeleteById
}