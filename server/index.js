require ("./Utils/db")
const express = require("express")
const port = 2000

const app = express()
app.get("/", (req,res)=>{
    res.send("am running on postman")
})
app.use(express.json())

app.listen(port, ()=>{
    console.log(`listening to ${port}`)
})