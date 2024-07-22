import bcrypt from "bcrypt";
import { User } from "../../database/model/user.model.js"



export const checkEmail = async(req,res,next) =>{
//check email exist or not 
let isFound =await User.findOne({email:req.body.email})
if (isFound) return res.status(409).json({message:"email existes alreay"})
    //hash password
    req.body.password=bcrypt.hashSync(req.body.password,8)
    next()
    
}