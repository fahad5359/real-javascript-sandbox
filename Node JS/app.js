// ? //////////////////////////////////// section 2 //////////////////////////////////////
//* we installed express (npm i express)
//* u can see after installing express there is a package installed with it called "node modules", it contain evrthing from librays that it need..
// !! بعد ما تم اضافت النود باكج او النود موديول ,هنا اذا نبي نستعملها لازم نصدرها اول .هي موجودة جاهزة لاكن نسوي اكسبورت للمكتبة اللي نبيها ثم نبدا شغلنا
// choose witch library u want ,export it ,then start working..


/*
const express = require('express')
نجيب الاكسبرس 

const app = express()
* instance of it

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
* it waits on the spacifaid port or listens?
*/


const express = require('express')
const app = express();

// the bellow (app.git() ) is a method,ركز
app.get("/Stronk", (req, res) => {
// *here we spcfy the endpoint nem
// *the parmeters we specfid with the function call back are: req"reqst",and res"response"
    res.send("الوالدة تسلم عليكم")
})


app.listen(3000, () => {
    // *here we spcfy the port number
    // ! here we can add a function so when ever the app or the port started working it triggers this function.
    console.log("helloh");
    console.log("i am your first server");
    console.log("ctr c to turn off");
})

// ? toogether with both the port number and the end point we can look for it in the browser after starting the server. as wrtten in the bellow formant
// localhost:PORT/endpoint
// localhost:3000/Stronk 