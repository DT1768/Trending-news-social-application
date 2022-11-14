require("dotenv").config();
const express = require("express");
//const { google, googleCallback } = require("../controllers/user");
const passport = require("passport");
const { myProfile,logOut, isAuthenticated, updatePrefrences } = require("../controllers/user");
const router = express.Router();


router.get('/googlelogin',passport.authenticate("google",{
    scope: ["profile","email"],
}));

/*router.get('/login',passport.authenticate("google",{
    scope: ["profile","email"],
    
    //successRedirect: process.env.FRONTENDURL,
}));*/

router.get('/login',passport.authenticate("google"),(req,res,next) => {
    if(req.user.preferences == undefined || req.user.location == undefined){
        res.json(req.user);
        //successRedirect: process.env.FRONTENDURL,
        //call update prefrences.
        //  res.send("Logged In.");
    }
    else{
        //successRedirect: process.env.FRONTENDURL,
        res.send("Logged In.");
    }
});

router.put('/updateprofile', isAuthenticated, updatePrefrences);

router.get('/me',isAuthenticated , myProfile);

router.get('/logout',logOut);
module.exports = router;