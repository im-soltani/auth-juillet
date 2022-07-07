//require router from express
const router=require("express").Router()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const User=require('../models/User')
const isAuth=require("../middlewares/isAuth")
const {validator,loginRules,registerRules}=require('../middlewares/validator')

//register
router.post("/register",registerRules(),validator,async(req,res)=>{
    const{name,lastName,email,password}=req.body
try{
    //checking for existing user
let user=await User.findOne({email})

if(user){
    return res.json({msg:"User already exists"})
}
//Create new user
user =new User({name,lastName,email,password})

//create salt & hash
const salt = 10;
const hashedPassword=await bcrypt.hash(password,salt)

//replace user password with hashed password 
user.password=hashedPassword
//save the user
  await user.save()

  //sign user
const payload={
    id:user._id
}
//generate token
const token=await jwt.sign(payload, "oiiru",{expiresIn:"7 days"})


  res.json({msg:'User registered with success',user,token})
}
catch(error){
res.send({msg:"Server error"})
}

    
})

//@route Post api/auth/login
//@desc Login User
//@access Pulic

router.post("/login",loginRules(),validator,async(req,res)=>{
    const{email,password}=req.body
    try{
      //check for existing user
      let user=await User.findOne({email})  

      if(!user){
      return res.json({msg:'Bad Credentials!email'})
      }
//check password
const isMatch=await bcrypt.compare(password,user.password)
if(!isMatch){
    return res.json({msg:'Bad credentials!password'})
}

    //sign user
const payload={
    id:user._id
}
//generate token
const token=await jwt.sign(payload, "oiiru",{expiresIn:"7 days"})


      res.json({msg:"logged in with success",user,token})
    }
    catch(error){
        res.json({msg:'server error'})
    }
})

//route Get api/auth/user
//desc  get authenticated user
//access private 
router.get("/user",isAuth,(req,res)=>{
    res.send({user:req.user})
})



module.exports=router
