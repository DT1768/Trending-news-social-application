require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const bodyParser = require("body-parser");
const googleTrends = require("google-trends-api");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const newsRoutes = require("./Routes/news");
const categoryRoutes = require("./Routes/category");
const subcategoryRoutes = require("./Routes/subcategory");
const locationRoutes = require("./Routes/location");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", newsRoutes);
app.use("/api", categoryRoutes);
app.use("/api", subcategoryRoutes);
app.use("/api", locationRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`app is running at ${port}....`);
});
