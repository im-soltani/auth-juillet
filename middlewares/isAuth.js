//require JWT
const jwt=require('jsonwebtoken')

//require the user schema
const User=require("../models/User")

const isAuth=async(req,res,next)=>{
    try{
        const token=req.headers['x-auth-token'];

        //check for token
        if(!token)
        return res.send({msg:"No token ,authorization denied"})


        //verify token 
        const decoded=await jwt.verify(token,"oiiru")

        const user =await User.findById(decoded.id)

        if(!user){
            return res.send({msg:"authorization denied"})
        }
        //create user 
        req.user=user

        next()
    }
    catch{
        return res.json({msg:'servor error'})
    }
}
module.exports=isAuth