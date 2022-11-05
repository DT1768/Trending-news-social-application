require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const bodyParser = require("body-parser");
const googleTrends = require("google-trends-api");
//const cookieParser = require("cookie-parser");
//const cors = require("cors");

const newsRoutes = require("./routes/news");

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(cookieParser());
//app.use(cors());

app.use("/api", newsRoutes);

const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`app is running at ${port}....`)
});