// let pargarph = document.querySelector("#kk")
// let btn =document.querySelector("#btn")
// btn.addEventListener("click",() => {
//     console.log("oejrfiw");
// })

// //  ? addEventListener( "somthing" , "somthing" )
// // $(selector).click(function () {
// // });



const express=require("express");
const ourapp=express();

// ourapp.get("/home",(req,res)=>{
//     // res.send("weclome to your web page")
//     
// })
// ourapp.listen(100,()=>{
//     console.log("server is  on");

// })


ourapp.get("/undex",(req,res)=>{
    res.send("hello")
})
ourapp.listen(2000,()=>{
    console.log("server is on");
})

