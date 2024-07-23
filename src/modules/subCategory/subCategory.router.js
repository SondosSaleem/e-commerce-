import { Router } from "express";
import { addCategory ,getAllCategory,getCategory,updateCategory,deleteCategory} from "./subCategory.controller.js";


const CategoryRouter=Router()

CategoryRouter
.route('/')
.post(addCategory)
.get(getAllCategory)


CategoryRouter
.route('/:id')
.get(getCategory)
.put(updateCategory)
.delete(deleteCategory)

export default CategoryRouter;