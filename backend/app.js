
//Library Imports
require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//Routes Imports
const newsRoutes = require("./routes/news");
const categoryRoutes = require("./routes/category");
const subcategoryRoutes = require("./routes/subcategory");
const locationRoutes = require("./routes/location");
const userRoutes = require("./routes/user");
const {connectPassport} = require("./config/passport");
const passport = require('passport');

//DB Connect
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then( () => {
        console.log('Connected to the database ')
    }).catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

//using Middlewares
app.use(session({
    secret: process.env.SESSIONSECRET,
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


connectPassport();
app.use("/api", newsRoutes);
app.use("/api",categoryRoutes);
app.use("/api",subcategoryRoutes);
app.use("/api",locationRoutes);
app.use("/api",userRoutes);

const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`app is running at ${port}....`)
});