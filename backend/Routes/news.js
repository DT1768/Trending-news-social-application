const express = require("express");
const router = express.Router();

const {newsHome} = require("../controllers/news");


router.post("/home",newsHome);

module.exports = router;