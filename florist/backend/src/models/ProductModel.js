import mongoose from "mongoose";

const ProductModel=mongoose.Schema({
    image:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true},
    desc:{type:String,required:true},
})

const Product=mongoose.model("products",ProductModel)

export default Product