
import CategoryRouter from "./Category/category.router.js"
export const  boostrap =(app)=>{
    app.use('api/v1/category',CategoryRouter)
}