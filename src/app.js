const express = require('express')
const app =express();
const port=8000;

app.get("/",(req,res)=>{
    res.send("hello atharva")
})

app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})