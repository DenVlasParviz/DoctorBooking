import express from 'express'

import cors from 'cors'
import adminRouter from './routes/adminRouter.js'
import 'dotenv/config'
import  connectDB from './config/mongodb.js'
import connectCloudinary from "./config/cloudinary.js";
import doctorRouter from "./routes/doctorRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express()
const port = process.env.PORT || 3000
connectDB()
connectCloudinary()

//middlewares

app.use(express.json())
app.use(cors())

//api endpoint


app.use('/api/admin',adminRouter)
//localhost:4000/api/admin/add-doctor

app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)
app.get('/', (req, res) => {
    res.send('API WORKING')
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})