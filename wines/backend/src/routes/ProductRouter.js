import express from "express"
import { addProduct, deleteProduct, getProduct } from "../controllers/ProductController.js"

const ProductRouter=express.Router()
ProductRouter.get("/",getProduct)
ProductRouter.post("/",addProduct)
ProductRouter.delete("/:id",deleteProduct)


export default ProductRouter