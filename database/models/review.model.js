import mongoose, { Types } from "mongoose";
const schema = new mongoose.Schema({
   
comment:String,
user:{
    type:Types.ObjectId,
    ref:'User',
    required:true
},
rate:{
    type:Number,
    min:0,
    max:5,
    required:true
},proudct:{
    type:Types.ObjectId,
    ref:'Proudct',
    required:true
},
},{timestamps :true ,versionKey:false})
export const Review =mongoose.model('Review',schema)