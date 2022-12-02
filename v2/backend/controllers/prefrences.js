const { default: mongoose } = require("mongoose");
const Prefrences = require("../models/prefrences");

exports.getPrefrencesById = (req,res,id,next) => {
    Prefrences.findById(id).exec((err,prefrences) => {
        if(err){
            res.status(400).json({
                error: "No prefrences."
            }
            )
        }
        else{
            req.prefrences = prefrences;
            next();
        }
    });
};

exports.createPrefrences = (req,res) => {
    const prefrences = new Prefrences(req.body);
    prefrences.save((err,prefrences) => {
        if(err){
            res.status(400).json({
                error: "cannot create prefrences."
            });
        }
        else{
            res.json({prefrences});
        }
    })
};

exports.getPrefrences = (req,res) => {
    return res.json(req.prefrences);
};

exports.updatePrefrences = (req,res) => {
    const user = mongoose.Types.ObjectId(req.body.user);

    Prefrences.findOneAndUpdate(
        {user: user},
        {$set:{
            location: req.body.prefrences.location,
            prefrence1: req.body.prefrences.prefrence1,
            prefrence2: req.body.prefrences.prefrence2,
            prefrence3: req.body.prefrences.prefrence3,
        }},
        {
            overwrite: true,
            new: true
        }
    ).then(res.json({
        message: "update successfull,"
    })).catch(res.json({
        message: "update failed."
    }))
}

//TODO:
exports.getPrefrencesByUser = (req,res) => {
    const user = req.body.user;

    Prefrences.findOne(
        {user:user},
        (err,prefrences) => {
            if(err){
                res.json({
                    message: "can't get prefrences",
                    error: err,
                })
            }
            else{
                res.json(prefrences);
            }
        }
    );
}

