import express from "express"
import "dotenv/config"
import "./db/dbConnection.js"
import ProductRouter from "./routes/ProductRouter.js"
import cors from "cors"

const app=express()

app.use(express.json())
app.use(cors())

app.use("/api/product",ProductRouter)
const port=process.env.PORT||5001

app.listen(port,()=>{
    console.log(`Server is running ${`http://localhost:${port}`}`)
})