import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import {SERVER_PORT, URL} from './config/config.js'
import userRouter from './routes/userRoter.js';
import weatherRouter from './routes/weatherRouter.js';


// dotenv.config();
const PORT = SERVER_PORT || 5000;
const app = express();


app.use(express.json());
app.use(cors());
app.use('/api', userRouter);
app.use('/api/weather', weatherRouter);

async function start() {
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log('server started on port' + PORT))
    } catch (err) {
        console.log(err)
    }
}

start();





