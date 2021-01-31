const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// configure dot-env
dotenv.config({path : './config/config.env'});

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

// configure cors
app.use(cors());

// accept the form data
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// get request
app.get('/' , (request , response) => {
    response.send(`<h2>Welcome to Form Validation Express Server</h2>`);
});

// configure the router
app.use('/user', require('./router/userRouter'));

app.listen(port, hostname, () => {
    console.log(`Express Server is started at http://${hostname}:${port}`);
});


