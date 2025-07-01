// require('dotenv').config({path : './env'})
import connectDB from "./db/index.js"
import dotenv from 'dotenv'
dotenv.config(
    {
        path : " ./env"
    }
)
// ;( async() => {
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     }catch(error){
//         console.error("ERROR" , error)
//         throw error
//     }
// })()




connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log("server is running on port ", process.env.PORT)
    })
})
.catch((err)=>{
    console.log("mongodb connection failed !!!" , err)
})