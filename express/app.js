// * here we are going to build an api
// * get and post  ?

const express = require('express');
const app = express();

//* Middleware (read what inside Post)
app.use(express.json())


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
    { nem: "asmaa", pass: "2211" },
    { nem: "kaled", pass: "1174522" }]
    
    app.listen(2000, () => {
        console.log("SERVER ON");
    })
// we want our app.get to send us our ddadtabase ,how?
app.get("/dball", (req, res) => {
    res.send(ourdb)

})
// ? res=response
app.get("/fnem", (req, res) => {
    // ! dont use res.send xx insted use
    // ** use res.json 
    res.json(ourdb[2])
})

// ** to read the post requst we need to downlowd somthing called "body-parser" to help us read the post requsit

// ** req is from the user. 
// ** res is from server.

// ? A good qistion is , how can we take info from the front end ,and send it to back end ...
// ! by using the the post method and json
// ** more explenation bellow in the post method bellow.
app.post('/postsmn', (req, res) => {
    /*
    Req => Body => raw => JSON
     this is the path in the post man app.

    by using the postman app, we are going to add a user,
    nem is :ahmad
    pass is :509
    */
//*   يعني جاني ريكويست من البوست مان
    console.log(req.body);
    ourdb.push(req.body)
/*  زي ما احنا شايفين فوق باستعمال البوستمان قدرنا اننا نظيف شخص جديد للسداتابايس .ممكن تقول ليه مانيب اشوفها فوق في الداتا بايس اللي عرفناها فوق ؟   لو تروح على القت ركويست \
dball 
بنشوف اننا اضفناها بنجااح.
*/
    res.js("i was sent seccfully ")

})











// app.get("/myapp", (req, res) => {
//     res.send("hello")
// })
// app.post("/myapp", (req, res) => {
//     res.send("asd")
// })

