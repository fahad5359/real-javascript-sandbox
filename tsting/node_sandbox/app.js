const express = require('express')
const app = express()
// ?we export the library first,and put it insd sefuhf u a oof instatnt h

// app.get('/hoome', function (req, res) {
//   res.send('Hello World')
// })
// ?app.git is a normal function(somthing,somthing)
// ?app.git has somthing diferant, we added a function inside of it...(somthing,somthing(){})
app.get("/asd",(req,res)=>{
    res.send("/hello")
    // webpage respnse
    
    
})
app.listen(3000,()=>{
    console.log("helloh user ");
    // server response
})
// ?app.listen has somthing diferant, we added a function inside of it...(somthing,somthing(){})

// localhost:PORT/endpoint