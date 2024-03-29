import Product from '../models/Product'
import Brand from '../models/Brand'
import Category from '../models/Category'

const serviceGetProducts = async () =>{
    const products = await Product.find({stock: {$gt:0}})

    for (const product of products) {
        const brand = await Brand.findById(product.brand_id);
        if (brand) {
            product.brand = brand.name;
        }
        const category = await Category.findById(product.category_id);
        if (category) {
            product.category = category.name;
        }
    }
    
    return products
}

const serviceGetTotalProducts = async () =>{
    const products = await Product.find()

    for (const product of products) {
        const brand = await Brand.findById(product.brand_id);
        if (brand) {
            product.brand = brand.name;
        }
        const category = await Category.findById(product.category_id);
        if (category) {
            product.category = category.name;
        }
    }
    
    return products
}

const serviceGetProduct = async (id : string) =>{
    const product =  await Product.findById(id)
    return product
}

// const devleo = async (id : string) =>{
//     const dd = await Brand.findById(id).select("name -_id")
//     return "Duarte"
// }

export { serviceGetProducts, serviceGetProduct, serviceGetTotalProducts}

