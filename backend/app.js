require('dotenv').config();

const express = require("express");

const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const newsRoutes = require("./routes/news");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", newsRoutes);

const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`app is running at ${port}....`)
});