
const express=require('express');
const serverConfig=require('./configes/server.config');
//central connector
const app=express();

//starting server
app.listen(serverConfig.PORT,()=>{
    console.log("Server started at port no "+serverConfig);
})
