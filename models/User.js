//require mongoose
const mongoose =require("mongoose")

//require SCHEMA FROM MONGOOSE

const schema=mongoose.Schema

//CReate the schema
const  userSchema=new schema({
    name:{
        type:String,
        required:true

    },
    lastName:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true,
    

    }

})

module.exports=User=mongoose.model("User",userSchema)
