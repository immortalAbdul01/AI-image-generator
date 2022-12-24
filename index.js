const express = require('express')
const dotevn = require('dotenv').config()
const path = require('path')
const port = process.env.PORT || 5000


const { generateimage } = require('./Controllers/openAiController')

const app = express()

// set static folder for middle ware 
app.use(express.static(__dirname + '/Public'));
// my body parser here 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/openai', require('./Routes/openAiRoutes'))
app.listen(port, () => {
    console.log(`the server has been stareted at ${port}`);
})