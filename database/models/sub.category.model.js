import mongoose, { Types } from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type:String,
        unique:[true,'name is required'],
        trim:"true",
        required:true,
        minLength:[2,'too short category name']
    },
    slug:{
        type:String,
        lowercase:true,
        required:true
    },
category:{
    type:Types.ObjectId,
    ref:'category'
},
createdBy:{
    type:Types.ObjectId,
    ref:'User'
}
},{timestamps :true ,versionKey:false})
export const SubCategory =mongoose.model('SubCategory',schema)