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

// connect to mongodb using mongoose
mongoose.connect(process.env.MONGO_DB_LOCAL_URL, {
    useCreateIndex : true,
    useFindAndModify : false,
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then((response) => {
    console.log(`Connected Successfully to Mongo DB.............`);
}).catch((err) => {
    console.error(err);
    process.exit(1); // stop the process.
});

// get request
app.get('/' , (request , response) => {
    response.send(`<h2>Welcome to Big basket Express Server</h2>`);
});

// configure the router
app.use('/api', require('./router/apiRouter'));

app.listen(port, hostname, () => {
    console.log(`Express Server is started at http://${hostname}:${port}`);
});


