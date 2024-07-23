import slugify from "slugify"
import { SubCategory } from "../../../database/models/sub.category.model.js"
import { asyncHandler } from "../../middelware/asyncHandler.js";
import { AppError } from "../../../utlits/appError.js";


const addSubCategory =async(req,res,next)=>{
    req.body.slug=slugify (req.body.name)
    let subCategory = new SubCategory (req.body)
    console.log(subCategory)
    await category.save()
    console.log(category)
 res.json({message:"succes",subCategory})
}

/*const addCategory = asyncHandler(async (req, res) => {
    req.body.slug=slugify (req.body.name)
    let category = await Category.insertMany(req.body);
    res.status(201).json({ message: "sucess", category });
  });*/
  const getAllSubCategory = asyncHandler(async (req, res) => {
  
    let subCategory = await SubCategory.find()
    res.status(200).json({ message: "success",subCategory });
  });  
  const getSubCategory = asyncHandler(async (req, res) => {
  
    let subCategory = await SubCategory.findById(req.params.id)
   subCategory|| next() (new AppError("category not found ", 404) );
    !subCategory ||res.status(200).json({ message: "success", subCategory });
  
  });
  const updateSubCategory = asyncHandler(async (req, res) => {
    req.body.slug=slugify (req.body.name)
    let subCategory = await SubCategory.findByIdAndUpdate(req.params.id,req.body,{new:true})
    category || next() (new AppError(" sub category not found ", 404) );
  
    !category ||res.status(200).json({ message: "success", category });
  
  });

  const deleteCategory = asyncHandler(async (req, res) => {
    let category = await Category.findByIdAndDelete(req.params.id); //find by id  and delete
    /*if(category == null) equal ||*/  // true | ahmed =>ahmed 
    //false|| ahmed => ahmed
    category || next() (new AppError("category not found ", 404) );
    !category ||res.status(200).json({ message: "deleted ", category });
  });


export { addCategory,getAllCategory,getCategory,updateCategory,deleteCategory};






