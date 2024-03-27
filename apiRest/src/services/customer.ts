import Customer from '../models/Customer'
import Product from '../models/Product'
import Brand from '../models/Brand'
import Category from '../models/Category'


const serviceGetCustomers = async () =>{
    const customers = await Customer.find()
    return customers
}

const serviceGetCustomer = async (id : string) =>{
    const customer =  await Customer.findById(id)
    return customer
}

const serviceGetSpecialpricing = async (user_id : string, nombre_producto : string) =>{
    
    const customer = await Customer.findById(user_id)
    if(customer){

        const product = await Product.findOne({name: nombre_producto})
        if(product){
            const brand = await Brand.findById(product.brand_id);
            
            const category = await Category.findById(product.category_id);
            if (category) {
                product.category = category.name;
            }

            for (const specialPrecie of customer.specialPrices) {
                if(specialPrecie.brand_id == product.brand_id){
                    const brand = await Brand.findById(specialPrecie.brand_id)
                    if(brand){
                        product.percentageSpecialPrice = brand.percentageSpecialPrice
                        product.specialPrice = await product.price - (product.price * brand.percentageSpecialPrice / 100);
                        product.brand = brand.name;
                        return product
                    }
                }else{
                    const brand = await Brand.findById(specialPrecie.brand_id)
                    if(brand)
                        product.brand = brand.name;
                        return product
                }
            }
        }
        return product
    }
}


export { serviceGetCustomers, serviceGetCustomer, serviceGetSpecialpricing}