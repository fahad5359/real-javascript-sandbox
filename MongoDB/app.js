const express = require('express');
const mehapp=express()
const datab=require("./db")


mehapp.listen(2000,()=>{
    console.log("the server is on");
})