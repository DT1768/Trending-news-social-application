Subcategory = require("../models/subcategory");


exports.getSubcategoryById = (req,res,id,next) =>{

}

exports.createSubcategory = (req,res) => {
    const subcategory = new Subcategory(req.body);
    subcategory.save((err,subcategory) => {
        if(err){
            res.status(400).json({
                error: "Not able to create subcategory."
            });
        }
        else{
            res.json({subcategory});
        }
    });
};