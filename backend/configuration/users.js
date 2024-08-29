const mongoose=require('mongoose')

const productschema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

module.exports =mongoose.model('users',productschema)
