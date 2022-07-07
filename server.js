//require express
const express=require('express');

//Require connectDB
const connectDB=require("./config/connectDB")

//resuire the router
const authRouter=require('./routes/auth')
//INit express
const app=express()


//Middleware==>Parse the DATA TO json
app.use(express.json())

//connectDB
connectDB()

//use routes
app.use("/api/auth",authRouter)
//Create the port
const port=5000

//lunch the server
 app.listen(port,(error)=>
 error?
 console.log(error)
 :console.log(`the server is running on port ${port}`))

