require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.set(bodyParser.urlencoded({ extended: true}));
app.set(bodyParser.json());


// connet to mongodb
const URI = process.env.MONGO_URL;
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('connected to mongodb');
});

app.use('/course', require('./route/courseRoute'));

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
    console.log('server is running @ port ', PORT);
})