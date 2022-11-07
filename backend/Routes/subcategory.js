const express = require("express");
const router = express.Router();

const {createSubcategory} = require("../controllers/subcategory");


router.post("/subcategory/create",createSubcategory);

module.exports = router;