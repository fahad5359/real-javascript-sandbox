const mongoose = require("mongoose")

// first we create  a schema
const userZschema= new mongoose.Schema({
    fname:{type:String, required:true},
    favdood: String
})
/* mon.schema({
    fav:{}
    somting: value
}) */

// bellow we create a varuble model so blueprint,so it can help us export the schema
const Users=mongoose.model("User",userZschema)

// finally we export the module so we can test it
module.exports=Users