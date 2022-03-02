// * here we are going to build an api
// * get and post  ?

const express = require('express');
const app = express();


// ?the packge.json acts as a user manual
// ** شي مزعج جدا كل ما عدلنا شي ,لازم نروح نطفي السيرفر و نشغله 
// ** so we are downlowding a library called nodemon(npm i nodemon) if we want to add it to ther node packge(download it),or(npm i -g nodmon) if we want to downlod it globally,
// ! after installing nodemon,  here is the syntax to start the app(nodemon "appname or filename")


// ** in the packg.json somthing called script, we can spicfy key words to give us a crting command
// ** عشان نشغل الاوامر اللي بالسكربت ,اللي موجود بالباكج دوت جيسون ,نحدد نوع الكوماند
// **then if we want to call it we write (npm run "the nem of our command") 


// post requst (postman)
//* post man used for testing the .post/.get requsts, methods
const ourdb = [
    { nem: "fahad", pass: "1122" },
    { nem: "ali", pass: "112872" },
    { nem: "asma", pass: "2211" },
    { nem: "kaled", pass: "1174522" }]

// we want our app.get to send us our ddadtabase ,how?
app.get("/dball",(req,res)=>{
    res.send(ourdb)

})
// res=response
app.get("/fnem",(req,res)=>{
// ! dont use res.send xx insted use
// ** use res.json 
  res.json(ourdb[2])
})

// ** to read the post requst we need to downlowd somthing called "body-parser" to help us read the post requsit













// app.get("/myapp", (req, res) => {
//     res.send("hello")
// })
app.post("/myapp", (req, res) => {
    res.send("asd")
})

app.listen(2000, () => {
    console.log("SERVER ON");
})
