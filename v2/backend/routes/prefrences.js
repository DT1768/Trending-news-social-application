const express = require("express");
const router = express.Router();

const {getPrefrencesById, getPrefrences, createPrefrences, updatePrefrences,getPrefrencesByUser} = require("../controllers/prefrences");

const {isAuthenticated} = require("../controllers/user");


//params
//router.param("prefrencesId",getPrefrencesById);

//CREATE
router.post("/prefrences/create", createPrefrences);


//Read
router.post("/prefrences",getPrefrencesByUser);

//UPDATE
router.put("/prefrences/update", isAuthenticated, updatePrefrences);


module.exports = router;



