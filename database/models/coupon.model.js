import mongoose, { Types } from "mongoose";
const schema = new mongoose.Schema({
   
code:{
    type:String,
    unique:true,
    required:true
},
expirse:Date,
discount:Number





},{timestamps :true ,versionKey:false})
export const Coupon =mongoose.model('Coupon',schema)