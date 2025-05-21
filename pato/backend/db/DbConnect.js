import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('CONNECT SUCCESS')
}).catch(()=>{
    console.log('connect not server')
})