import express from "express"
import "dotenv/config"
import "./db/DbConnect.js"
import cors from 'cors'
import ProductRouter from "./src/routes/ProductRouter.js"
const app=express()
const port=process.env.PORT||4001
app.use(cors())
app.use(express.json())
app.use("/api/product",ProductRouter)
app.listen(port,()=>{
    console.log(`Server is running ${`http://localhost:${port}`}`)
})