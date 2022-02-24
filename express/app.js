// * here we are going to build an api
// * get and post  ?

const express = require('express');
const app = express();

app.get("/myapp", (req, res) => {
    res.send("hello")
})
app.listen(2000, () => {
    console.log("mjnoooon ya oda");
})

// ** شي مزعج جدا كل ما عدلنا شي ,لازم نروح نطفي السيرفر و نشغله 
// ** so we are downlowding a library called nodemon(npm i nodemon) if we want to add it to ther node packge,or(npm i -g nodmon) if we want to downlod it globally,
// ! aftert installing nodemon,  here is the syntax to start the app(nodemon "appname or filename")