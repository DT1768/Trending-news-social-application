const express = require("express");
const router = express.Router();

const {getLocationById,createLocation,getLocation,getAllLocations} = require("../controllers/location");

//PARMAS
router.param("locationId",getLocationById);


//CREATE 
router.post("/location/create",createLocation);

//READ
router.get("/location/:locationId",getLocation);
router.get("/locations",getAllLocations);


module.exports = router;