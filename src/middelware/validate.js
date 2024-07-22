import joi from "joi"
import { AppError} from "../../src/utils/common/appError.js";
import { role, status } from "../../src/utils/common/enum.js";
/*export const generalValidation =({
    firstName:joi.string().min(3).max(20),
    lastName:joi.string().min(3).max(20),
    username:joi.string().min(3).max(20),
    email:joi.string().email(),
    password:joi.string().pattern(new RegExp(/*'^1234678910$'*/
    //recoveryEmail:joi.valid(joi.ref('password')),
    //role:joi.string().valid(...Object.values(role))


export const validate = (schema)=> {
    return(req,res,next)=>{
        let data ={...req.body ,...req.params,...req.query }
        const {error}=schema.validate(req.body,{abortEarly:false})
        if(error){
            const errorArr=error.details.map (err=>err.message)
            return next(new AppError(errorArr,400))
            }
            next()
        }
    
        }
 