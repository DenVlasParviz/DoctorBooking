import express from 'express'

import cors from 'cors'
import adminRouter from './routes/adminRouter.js'
import 'dotenv/config'
import  connectDB from './config/mongodb.js'
import connectCloudinary from "./config/cloudinary.js";

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


app.get('/', (req, res) => {
    res.send('API WORKING')
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})