const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();

dotenv.config()

const mongoString = process.env.MONGODB_URI;
if (!mongoString) {
    console.error('MongoDB URI is not set');
    process.exit(1);
}
app.use(express.json());

const connectToDB = () => {
    mongoose.connect(mongoString)
    const database = mongoose.connection;
    database.on("error", (error) => {
        console.log(error);
        process.exit(1);
    });
      
    database.once("connected", () => {
    console.log("Database Connected");
    });

      
}

module.exports = connectToDB
