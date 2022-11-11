const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const{ObjectId} = mongoose.Schema;


const locationSchema = new Schema(
    {
        name: {
            type:String,
            required:true,
            maxlength:32,
            unique:true
        },
        code: {
            type:String,
            required:true,
            maxlength:32,
            unique: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Location", locationSchema);
