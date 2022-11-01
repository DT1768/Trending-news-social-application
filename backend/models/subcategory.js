const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const{ObjectId} = mongoose.Schema;

const subcategorySchema = new Schema(
    {
        id:{
            type:string,
            required:true,
            unique:true
        },
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
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