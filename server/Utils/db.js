const mongoose = require("mongoose")
require("dotenv").config()
const url = process.env.DB

mongoose.connect(url).then(()=>{
    console.log("connect to flowerDB")
}).catch((err)=>{
    console.log(err.message)
})


module.export= mongoose