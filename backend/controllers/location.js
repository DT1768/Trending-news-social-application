const Location = require("../models/location");

exports.getLocationById = (req,res,next,id) => {
    Location.findById(id).exec((err,location) =>{
        if(err){
            res.status(400).json({
                error: "location not found."
            });
        }
        else{
            req.location = location;
            next();
        }
    })
};

exports.createLocation = (req,res) => {
    const location = new Location(req.body);
    location.save((err,location) => {
        if(err){
            res.status(400).json({
                error: "cannot create location."
            });
        }
        else{
            res.json({location});
        }
    });
};

exports.getLocation = (req,res) => {
    return res.json(req.location);
};

exports.getAllLocations = (req,res) => {
    Location.find().exec((err,locations) => {
        if(err){
            res.status(400).json({
                error: "No location found."
            })
        }
        else{
            res.json(locations);
        }
    })
};