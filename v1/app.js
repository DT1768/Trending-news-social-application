const express = require('express')
const app=express()
require('dotenv').config();

const port = process.env.PORT||3000;
const bodyParser = require('body-parser');
const moment = require('moment')
app.locals.moment = moment;

const newsRoutes = require('./routes/news');

// template engine  
//app.use(express.static('views'))
//app.set('view engine','ejs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',newsRoutes)


app.listen(port,()=> console.log("started"))