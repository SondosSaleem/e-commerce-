import { AppError } from "../../utlits/appError.js";

//asynchandler = catch error
export const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      if (err) {
        next(new AppError(err.message, err.statusCode));
      }
    });
  };

};
export const gLobaiErrorHandling=(err,req,res,next)=>{
    return res.status(err.statusCode || 500).json({message:err.message,stack:err.stack,success:false})
}
