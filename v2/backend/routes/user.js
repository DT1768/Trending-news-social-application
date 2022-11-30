require("dotenv").config();
const express = require("express");
//const { google, googleCallback } = require("../controllers/user");
const passport = require("passport");
const { myProfile,logOut, isAuthenticated} = require("../controllers/user");
const router = express.Router();


router.get('/googlelogin',passport.authenticate("google",{
    scope: ["profile","email"],
}));

/*router.get('/login',passport.authenticate("google",{
    scope: ["profile","email"],
    
    //successRedirect: process.env.FRONTENDURL,
}));*/

router.get('/login',passport.authenticate("google",{failureRedirect: `${process.env.FRONTENDURL}/login`}),(req,res) => {
        res.redirect(`${process.env.FRONTENDURL}`);
});

router.get('/me',isAuthenticated , myProfile);

router.get('/logout',logOut);

module.exports = router;