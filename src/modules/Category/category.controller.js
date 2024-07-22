import slugify from "slugify"
import { Category } from "../../../database/models/category.model.js"
import { asyncHandler } from "../../middelware/asyncHandler.js";
import { AppError } from "../../../utlits/appError.js";


const addCategory =async(req,res,next)=>{
    req.body.slug=slugify (req.body.name)
    let category = new Category(req.body)
    console.log(category)
    await category.save()
    console.log(category)
 res.json({message:"succes",category})
}

/*const addCategory = asyncHandler(async (req, res) => {
    req.body.slug=slugify (req.body.name)
    let category = await Category.insertMany(req.body);
    res.status(201).json({ message: "sucess", category });
  });*/
  const getAllCategory = asyncHandler(async (req, res) => {
  
    let category = await Category.find()
    res.status(200).json({ message: "success", category });
  });  
  const getCategory = asyncHandler(async (req, res) => {
  
    let category = await Category.findById(req.params.id)
    category || next() (new AppError("category not found ", 404) );
    !category ||res.status(200).json({ message: "success", category });
  
  });
  const updateCategory = asyncHandler(async (req, res) => {
    req.body.slug=slugify (req.body.name)
    let category = await Category.findByIdAndUpdate(req.params.id,req.body,{new:true})
    category || next() (new AppError("category not found ", 404) );
  
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






