const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const{ObjectId} = mongoose.Schema;

const subcategorySchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 60,
            unique: true
        },
        trendid:{
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        category:{
            type: ObjectId,
            ref : "Category"
        }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Subcategory", subcategorySchema);