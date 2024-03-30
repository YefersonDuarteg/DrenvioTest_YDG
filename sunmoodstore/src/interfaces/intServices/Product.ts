export interface Product{
    _id: String,
    name: String,
    brand_id:String,
    brand:String,
    description:String,
    price:Number,
    specialPrice?:Number
    percentageSpecialPrice: String,
    stock: Number,
    color: String,
    category:String,
    category_id:String,
    productTypeId: String
}