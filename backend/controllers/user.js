const passport = require("passport");
const User = require("../models/user");

exports.myProfile = (req,res,next) =>{
    res.status(200).json({
        success:true,
        user: req.user,
    });
};

exports.logOut = (req,res,next) => {
    req.session.destroy((err)=>{
        if(err){
            next(err);
        }
        else{
            res.clearCookie("connect.sid");
            res.status(200).json({
                message: "Logged Out.",
            })
        }
    })
};

exports.isAuthenticated = (req,res,next) => {
    const token = req.cookies["connect.sid"];
    console.log(token);
    if(!token){
        return res.status(401).json({
            message: "Not Logged In",
        })
    }
    else{
        next();
    }
};

exports.updatePrefrences = (req,res) => {

    let prefrences = [];
    req.body.prefrences.forEach(prefrence => {
        prefrences.push(prefrence.id);
    })

    User.findOneAndUpdate(
        {id: req.user.id},
        {
            location: req.body.location.id,
            prefrenecs: prefrences,
        },
        {
            overwrite: true,
        },
        (err,result) => {
            if(err){
                res.send(err)
            }
            else{
                res.send("Prefrences updated.")
            }
        }
    )
}