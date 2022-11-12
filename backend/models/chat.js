const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const{ObjectId} = mongoose.Schema;

const chatSchema = new Schema(
    {
        sender: {
            type: ObjectId,
            ref: "User",
            required: true
        },

        receiver:{
            type: ObjectId,
            ref: "User",
            required: true
        },

        message: {
            type:string,

        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Chat", chatSchema);