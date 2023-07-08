
const express=require('express');
const mongoose=require('mongoose');
const serverConfig=require('./configes/server.config');
const dbConfig=require('./configes/db.config');
//const {init}=require("./models/user.model");
const userModel=require("./models/user.model");
const bcrypt=require("bcrypt");




//central connector
const app=express();

//logic to connect to MongoDB and Create and Admin use

mongoose.connect(dbConfig.DB_URL);
//connection
const db=mongoose.connection;

//if error occur
db.on('error',()=>{
    console.log("Errroe while connecting to DB");
})
//if sucessfully connected with mongodb 
db.once('open',()=>{
    console.log("Db is connected");

    init();
})

async function  init(){


//Check admin is preset or not

let admin=userModel.findOne({
    userId:"admin"
})
if(admin){
    console.log("Admin is already present");
    return;
}
//it will return promise 
const admin1=await userModel.create({
        name :"Vivek More",
        userId:"admin",
        email:"vivekmore7@gmail.com",
        userType:"ADMIN",
        password:bcrypt.hashSync("Viv@123",8);
    });
    console.log(admin1);
}


//starting server
app.listen(serverConfig.PORT,()=>{
    console.log(`Server started at port no ${serverConfig.PORT}`);
})
