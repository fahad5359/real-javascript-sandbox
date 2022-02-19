const express = require('express')
const app = express()
// ?we export the library first,and put it insd sefuhf u a oof instatnt h

app.get('/hoome', function (req, res) {
  res.send('Hello World')
})

app.listen(3000,()=>{
    console.log("helloh meh broda ");
})
// localhost:PORT/endpoint