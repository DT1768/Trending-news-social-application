require('dotenv').config();

const express = require('express');
const axios = require('axios');
const router = express.Router();

const {newsHome, newsCategory, newsSearch} = require("../controllers/news");

router.get('/',newsHome);

router.post('/category',newsCategory);


router.post('/search',newsSearch);


module.exports = router;