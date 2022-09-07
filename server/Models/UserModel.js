const mongoose = require("mongoose")
const validator = require("validator")

const userModel = mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true,
        lowercase:true,
        unique:true,
       validate(value){
        if(!validator.isEmail(value)){
            throw Error("email is not valid")
        }
       }
    },
    password:{
        type:String,
        require:true,
        trim:true
    }

})


module.exports = mongoose.model("users", userModel);
