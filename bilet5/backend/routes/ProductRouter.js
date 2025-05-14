import express from "express"
import { getProduct , addProduct, deletedProduct} from "../controllers/ProductController.js"

const ProductRouter=express.Router()
ProductRouter.get("/",getProduct)
ProductRouter.post("/",addProduct)
ProductRouter.delete("/:id",deletedProduct)

export default ProductRouter