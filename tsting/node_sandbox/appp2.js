// let pargarph = document.querySelector("#kk")
// let btn =document.querySelector("#btn")
// btn.addEventListener("click",() => {
//     console.log("oejrfiw");
// })




// creating an api and what is an api
const express=require("express");
const ourapp=express();



ourapp.get("/undex",(req,res)=>{
    res.send("hello")
})
ourapp.listen(2000,()=>{
    console.log("Server ON");
})

// 3 things: nodemon || postman || npm run
// we use "nodmon", to atomaticlly update server after saving
// we create somthiing  in script  it s called api

// in the packg.json somthing called script, we can spicfy key words to give us a crting command