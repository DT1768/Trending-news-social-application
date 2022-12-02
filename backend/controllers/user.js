const { default: mongoose } = require("mongoose");
const passport = require("passport");
const User = require("../models/user");

exports.myProfile = (req,res,next) =>{
    res.status(200).json(req.user);
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
    //console.log(JSON.stringify(req.user));
    if(!token){
        console.log("not logged in");
        return res.status(401).json({
            message: "Not Logged In",
        })
    }
    else{
        next();
    }
};

exports.updatePrefrences = (req,res) => {

    
    console.log(req.body)

    User.findByIdAndUpdate(
        mongoose.Types.ObjectId(req.body.user),
        {$set:{
            location: req.body.location,
            prefrence1: req.body.prefrence1,
            prefrence2: req.body.prefrence2,
            prefrence3: req.body.prefrence3,
        },
        
        },{
            new: true,
            overwrite: true,
        },
        (err,result) => {
            if(err){
                res.send(err);
                console.log(err)
            }
            else{
                console.log("success");
                console.log(result);
                res.send("Prefrences updated.")
            }
        }
    )
}