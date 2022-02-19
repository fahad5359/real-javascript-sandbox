// console.log("hello node user");

const exbress = require("express")
const myapp = exbress()

myapp.get("/test7",(req,res)=>{
    res.send("hello")
})


myapp.listen(5000,()=>{
    console.log("server is on..");
    // here is the server
})