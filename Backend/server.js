const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

//Assign the MongoDB configuration Database url
const DB = process.env.DATABASE_URL;

//1. Connecting to MongoDB
var connection = mongoose.connect(DB)


app.listen(8000,async()=>
{  
    try {
        await connection ;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
    console.log(`Server running at http://127.0.0.1:${8000}`);
})