import mongoose from "mongoose";
const schema = new mongoose.Schema({
   
   name:String,
   email:String,
   password:String,
 isBLocked:{
        type:Boolean,
       default:false
    },
role:{
    type:String,
    enum:['admin','user'],
    default:'user'
}

},{timestamps :true ,versionKey:false})
export const User =mongoose.model('User',schema)