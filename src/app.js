import express from "express"
import connectDB from "./config/dbConfig.js"

const PORT = 3000

const app = express()

app.get("/",(req,res)=>{
    res.send("hello world")

})

app.get("/posts",(req,res)=>{
    res.send("post section")
    
})

app.get("/notes",(req,res)=>{
    res.json({name:"karan",subject:"science"})
})

app.listen(PORT,()=>{
    console.log("express server is running")
    connectDB()
})