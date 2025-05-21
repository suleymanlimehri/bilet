import express from "express"
import "dotenv/config"
import "./db/dbConnect.js"

import ProductRouter from "./src/routes/ProductRouter.js"
import cors from "cors"

const app=express()
const PORT=process.env.PORT||4001

app.use(cors())
app.use(express.json())
app.use("/api/product",ProductRouter)

app.listen(PORT,()=>{
    console.log(`Server is running ${`http://localhost:${PORT}`}`)
})