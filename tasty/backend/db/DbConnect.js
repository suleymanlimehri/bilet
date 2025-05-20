import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('CONNECT SUCCESSFULY')
}).catch(()=>{
    console.log('connect not server')
})