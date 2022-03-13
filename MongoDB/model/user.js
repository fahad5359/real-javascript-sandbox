const mongoose = require("mongoose")

// fisrt we create  a schema
const userZschema= new mongoose.Schema({
    fname:{type:String, required:true},
})
/* mon.schema({
    fav:{}
    somting: value
}) */