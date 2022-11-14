const mongoose = require("mongoose");
const{ObjectId} = mongoose.Schema;
var userSchema = new mongoose.Schema(
    {
        //TODO: Oauth Data
        googleId:{
            type: String,
            unique: true,
        },
        name: {
            type:String,
            required:true,
        },
        photo:{
            type: String,
        },
        email:{
            type: String,
        },
        location:{
            type: ObjectId,
            ref: "Location"
        },
        prefrences:[{type: ObjectId, ref: "Category"}],
        Friendlist:[{type: ObjectId, ref: "User"}],
        Following:[{type: ObjectId, ref: "User"}],
        Followers:[{type: ObjectId, ref: "User"}],
        //TODO:
        Searchhistory:{
            type: Array
        },
        //TODO:
        Savednews:{
            type: Array
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User",userSchema);

