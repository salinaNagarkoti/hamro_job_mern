import 'express-async-errors'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cloudinary from 'cloudinary'
import helmet from 'helmet'
import mongSanitize from 'express-mongo-sanitize'
//import { populateData } from './populate.js'

//routers
import jobRouter from './routes/jobRouter.js'
import authRouter from './routes/authRouter.js'
import userRouter from './routes/userRouter.js'

//public
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

//middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'
import { authenticateUser } from './middleware/authMiddleware.js'

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
})

const __dirname = dirname(fileURLToPath(import.meta.url))
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.static(path.resolve(__dirname, './Client/dist')))
app.use(cookieParser())
app.use(express.json())
app.use(helmet())
app.use(mongSanitize())

app.use('/api/v1/jobs', authenticateUser, jobRouter)
app.use('/api/v1/users', authenticateUser, userRouter)
app.use('/api/v1/auth', authRouter)

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './Client/dist', 'index.html'))
})

app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not found' })
})
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

try {
    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    //await populateData()
    app.listen(port, () => {
        console.log(`Server running on PORT ${port}...`);
    });
} catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1);
}


// const startServer = async () => {
    
// };

// startServer()
