// let pargarph = document.querySelector("#kk")
// let btn =document.querySelector("#btn")
// btn.addEventListener("click",() => {
//     console.log("oejrfiw");
// })

// //  ? addEventListener( "somthing" , "somthing" )
// // $(selector).click(function () {
// // });



const express=require("express")
const ourapp=express()

ourapp.get("/home",(req,res)=>{
    // res.send("weclome to your web page")
    res.redirect('/tsting/node_sandbox/inde.html'+req.url)
})
ourapp.listen(100,()=>{
    console.log("server is on");

})

