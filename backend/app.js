import express from "express"
import "dotenv/config"
import "./db/dbConnection.js"
import cors from "cors"
import ProductRouter from "./src/routes/ProductRouter.js"
const app=express()
app.use(cors())
app.use(express.json())


app.use("/api/products",ProductRouter)
const port=process.env.PORT||5001
app.listen(port,()=>{
    console.log(`Server is running ${`http://localhost:${port}`}`)
})