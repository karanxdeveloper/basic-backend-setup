import express from "express"
import connectDB from "./config/dbConfig.js"
import cors from "cors"
import router from "./routes/userRoute.js"

const PORT = 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.text())

app.use(router)

app.listen(PORT,()=>{
    console.log("express server is running")
    connectDB()
})