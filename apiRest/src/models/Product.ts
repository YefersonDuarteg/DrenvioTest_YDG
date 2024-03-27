import { Schema, model } from "mongoose";

const productSchema = new Schema({
    _id:{
        type: String
    },
    name:{
        type: String,
        required: true,
        trim: true
    },
    brand_id:{
        type: String,
        required: true,
        trim: true
    },
    brand:{
        type: String,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true,
    },
    specialPrice:{
        type: Number,
    },
    percentageSpecialPrice:{
        type: Number,
    },
    stock:{
        type: Number,
        required: true
    },
    color:{
        type: String,
        required: true,
        trim: true
    },
    category:{
        type: String,
        trim: true
    },
    category_id:{
        type: String,
        required: true,
        trim: true
    },
    productTypeId:{
        type: String,
        required: true,
        trim: true
    }
},
{
    versionKey : false,
    timestamps: true
});

export default model('Product', productSchema);