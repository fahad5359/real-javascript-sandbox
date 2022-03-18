// in app two we want to read req from browse..
const express = require('express');
const moapp = express();
// db
const dob = require('./db');
// user
const Users = require('./model/users')

moapp.use(express.json());



moapp.get("/viowall", (req, res) => {
    Users.find({}, (er, data) => {
        if (er) {
            console.log("Error");
        }
        res.json(data);
    });
  
});
// ------------------------------------------

moapp.post("/aaadd", (req, res) => {
    Users.create(req.body,
        (err, newData) => {
            if (err) {
                // console.log("hla");
                return handleError(err);
            }
            // console.log("DATA", newData);
            res.json("New info was created")
        });
    // res.json("help")
});
// ------------------------------------------
// moapp.delete("/dele6/:fName", (req, res) => {
//     console.log(req.params);
//     Users.deleteOne({ fName: req.params.fName }, (err, delob) => {
//         if(err) {
//             console.log("orror", err);
//             res.status(404).json("usr not there")
//         }else{
//             console.log(delob);
//             res.json("deleted" + req.params.fName)
//         }
//     })
// })
// moapp.delete("/dele6/:favFood", (req, res) => {
//     console.log(req.params);
//     Users.deleteOne({ favFood: req.params.favFood }, (err, delob) => {
//         if(err) {
//             console.log("orror", err);
//             res.status(404).json("usr not there")
//         }else{
//             console.log(delob);
//             res.json("deleted" + req.params.favFood)
//         }
//     })
// })
// ------------------------------------------
// moapp.put
// ------------------------------------------
moapp.listen(2500, () => {
    console.log("servr is on");
});