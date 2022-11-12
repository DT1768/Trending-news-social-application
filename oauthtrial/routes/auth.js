const router = require("express").Router();
const passport = require("passport");

router.get("/login/failed",)

router.get(
    "google/callback",
    passport.authenticate("google",{
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: "/login/failed",
    })
);
