import mongoose from "mongoose"

const ProductModel=mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    name:{type:String,required:true},
    desc: { type: String, required: true },
},{collection:"product"})

const Product=mongoose.model("products",ProductModel)

export default Product