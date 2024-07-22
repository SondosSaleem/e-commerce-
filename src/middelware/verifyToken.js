import jwt from 'jsonwebtoken';

 const verifyToken =(req,res,next)=>{
    let {token}=req.headers
    jwt.verify(token,'yaarb',async(err,decoded)=>{
        if(err)return res.status(401).json({message:"invalid token",err})

            req.user =decoded
            next()
        })
}

// Middleware to authorize company owner
const authorizeCompany = async (req, res, next) => {
    
        const companyOwner = req.user; //  req.user=>  decoded 
        const companyId = companyOwner.companyId;   
        
        next();
     {
        console.error('Authorization Error:', error);
        res.status(403).json({ message: 'Unauthorized' });
    }
};
    


export  {verifyToken,
authorizeCompany
}