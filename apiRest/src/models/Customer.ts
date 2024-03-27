import { Schema, model } from 'mongoose';

const customerSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    specialPrices: [
      {
        brand_id: {
            type: String,
            required: true,
            trim: true
        }
      }
    ]
},
{
    versionKey : false,
    timestamps: true
});

export default model('Customer', customerSchema);