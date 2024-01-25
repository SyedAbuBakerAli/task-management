const express = require('express');
const cors = require(`cors`);



const cookieParser  = require(`cookie-parser`);
const bodyparser = require(`body-parser`)
const fileUpload = require(`express-fileupload`);

const app = express();






app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(fileUpload());




//Import all routes
const auth = require(`./routes/auth`);
const task = require('./routes/task')

app.use(`/api/v1`, auth)
app.use(`/api/v1`, task)


module.exports = app