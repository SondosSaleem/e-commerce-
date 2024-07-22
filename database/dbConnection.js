
import mongoose from "mongoose";
import {connect} from "mongoose"

 export const  dbConnection =mongoose.connect('mongodb://localhost:27017/sama').then(() => {
    console.log('Connected to database');
}).catch((error) => {
    console.error('Error connecting to database:', error);
});