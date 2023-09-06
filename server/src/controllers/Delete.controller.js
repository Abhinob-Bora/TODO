import { validationResult } from "express-validator"
import { jsonGenerate } from "../utils/helpers.js";
import { StatusCode } from "../utils/constants.js";
import User from "../models/User.js";
import Todo from "../models/Todo.js";


export const deleteTodo = async(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.json(jsonGenerate(StatusCode.VALIDATION_ERROR,"Todo is required",error.mapped()))
    }

    try {
        const userID=req.body.id
        const result =User.findOneAndUpdate({_id:req.userId})



        if(result){
            const user = await User.findOneAndDelete({_id:req.userId},
        )
            return res.json(jsonGenerate(StatusCode.SUCCESS,"Todo deleted successfully",result))
            

    }} catch(error) {
        res.json(jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY,"Something went wrong",error))
    }



}