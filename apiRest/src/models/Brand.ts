import { Schema, model } from "mongoose";

const BrandSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    percentageSpecialPrice:{
        type: Number,
        required: true
    }
},
{
    versionKey : false,
    timestamps: true
});

export default model('Brand', BrandSchema);