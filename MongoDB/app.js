const express = require('express');
const app = express();
// db
const db = require("./db");
// user
const User = require('./model/users')

app.use(express.json());

app.get("/allelm",(req,res)=>{
    // .find displays all the values oof the db
    User.find({},(err, newData) => {
        if (err) {
            // console.log("hla");
            return handleError(err);
        }
        // console.log("DATA", newData);
        res.json(newData)
    });
})

app.post("/aa", (req, res) => {
    User.create(
        { fName: "fahad", favFood: "chickn" },
        (err, newData) => {
            if (err) {
                // console.log("hla");
                return handleError(err);
            }
            // console.log("DATA", newData);
            res.json("the datas was created sccfully")
        });
        // res.json("sdefihu")
    // res.json("help")
});
app.listen(4000, () => {
    console.log("servr is on");
});




//###################################### section3 ##############################

// receving info from the broser not from the code editor

