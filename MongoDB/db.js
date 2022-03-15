// here we istalled mongoose, mongose hellp us comunicate with mongodb better
// npm i mongoose

const mongoose = require("mongoose");

// here we spicfy the url of the db
const mongoURI = "mongodb://localhost:27017/thedbpg";
const db = mongoose.connection;

// connecting the db
mongoose.connect(
    mongoURI,
   
    { useNewUrlParser: true },


    () => {
        console.log("the db is working");
    }
);
/*

mongose.connect(mongouri {},function(){

})

*/

// extra
// if u want to check error
db.on("error", (err) => {
    console.log(err.message + "ar7b, feh problem ");
});
// db.on("connected", (err) => {
//     console.log("connected is jood");
// })


/*                                        ================================= sectioon 2 ==========================                    */
// in secion 2 will descuss how can we add delete ,ubdate data, in the database..
// we create a model