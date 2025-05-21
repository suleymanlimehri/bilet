import Product from "../models/ProductModel.js";

export const getProduct=async(req,res)=>{
    try {
        const product=await Product.find()
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send("server error")
    }
}
export const addProduct=async(req,res)=>{
    try {
        const product=new Product(req.body)
        await product.save()
        res.status(201).send(product)
    } catch (error) {
        res.status(500).send("server error")
    }
}
export const deleteProduct=async(req,res)=>{
    let {id}=req.params
    try {
        const product=await Product.findByIdAndDelete(id)
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send("server error")
    }
}
