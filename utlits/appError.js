import { Error } from "mongoose";

export class AppError extends Error{  //class error not status code => constructoer from  apperror
       constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
       }                               
    
}