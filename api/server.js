const express = require('express')
const notesRoutes = require('./routes/notesRoutes')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectToDB = require('./db/connectToDB')

const app = express()

app.use(cors())
app.use(bodyParser.json());

connectToDB()

app.use('/api', notesRoutes);

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`);
});