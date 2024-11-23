const express = require('express')
const router = express.Router();
const notesRoutes = require('./routes/notesRoutes')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectToDB = require('./db/connectToDB')

const app = express()

const corsOption = {
    origin: process.env.APPLICATION_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}
app.use(cors(corsOption))
app.use(bodyParser.json());

connectToDB()

app.use('/api', notesRoutes);

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`);
});