// require('dotenv').config({path:'./env'});
import dotenv from 'dotenv';
// import mongoose from 'mongoose';
import express from 'express';
// import { DB_NAME } from './constants.js'
const app = express();
import connectDB from './db/index.js';
dotenv.config({ path: './env' });

connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server listening on port number ${process.env.PORT}`);
    })
}).catch((err) => {
    console.log("MONGO db connection failed !!!", err);
})

/*
(async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on('error', () => {
            console.log('Error connecting:', error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`App listening on port number ${process.env.PORT}`);
        })
    }
    catch (error) {
        console.error('Error:', error);
        throw error;
    }
})()*/