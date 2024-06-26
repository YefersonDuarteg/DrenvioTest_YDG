import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    }
},
{
    versionKey : false,
    timestamps: true
});

export default model('Category', categorySchema);