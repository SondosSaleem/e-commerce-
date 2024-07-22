import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import {globalError}from "./src/middelware/globalError.js"
import CategoryRouter from "./src/modules/Category/category.router.js"
import { AppError } from './utlits/appError.js'
const app = express()
const port =8000
app.use(express.json())
app.use('/api/v1/category',CategoryRouter);

//bootstrap(app)
app.use('*',(req,res,next)=>{
    next (new AppError('route not found :${req.originalUrl}',404))
})
dbConnection
app.use(globalError)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))