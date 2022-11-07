const express = require("express");
const router = express.Router();

const {getCategoryById,createCategory,getCategory,getAllCategories} = require("../controllers/category");

//PARMAS
router.param("categoryId",getCategoryById);


//CREATE 
router.post("/category/create",createCategory);

//READ
router.get("/category/:categoryId",getCategory);
router.get("/categories",getAllCategories);


module.exports = router;