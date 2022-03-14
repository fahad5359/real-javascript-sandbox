const express = require('express');
const mehapp = express();
// db
const db = require("./db");
// user
const Users = require("./model/users");

mehapp.use(express.json())



// in the post  req, we send a function  that,ad's a new user

mehapp.post("/ab", (req, res) => {
    Users.create({ fame: "Fahad", favfood: "chicken" },
        (err, newstuff) => {
            if (err) {
                // the error handling function
                return handleError(err+"weaddad");
            }
            console.log("The New Stuff is", newstuff);
        });

});
mehapp.listen(2000, () => {
    console.log("the server is on");
})