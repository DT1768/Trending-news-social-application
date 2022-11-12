const express = require("express");
const router = express.Router();

const {
  newsHome,
  newsSearch,
  newsSearchByCategory,
} = require("../controllers/news");

router.post("/trending", newsHome);

router.post("/keywordsearch", newsSearch);

router.post("/categorysearch", newsSearchByCategory);

module.exports = router;
