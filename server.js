
const express=require('express');
const mongoose=require('mongoose');

const serverConfig=require('./configes/server.config');
const dbConfig=require('./configes/db.config');
//central connector
const app=express();

//logic to connect to MongoDB and Create and Admin use

mongoose.connect(dbConfig.DB_URL);
//connection
const db=mongoose.connection;

db.on('error',()=>{
    console.log("Errroe while connecting to DB");
})

db.once('open',()=>{
    console.log("Db is connected");
})



//starting server
app.listen(serverConfig.PORT,()=>{
    console.log(`Server started at port no ${serverConfig.PORT}`);
})
