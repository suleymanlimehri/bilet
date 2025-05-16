import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connect successfuly')
}).catch(()=>{
    console.log('connect not server')
})