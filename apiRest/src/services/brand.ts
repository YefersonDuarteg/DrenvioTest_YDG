import Brand from '../models/Brand'

const serviceGetBrands = async () =>{
    const brands = await Brand.find()
    return brands
}

const serviceGetBrand = async (id : string) =>{
    const brand =  await Brand.findById(id)
    return brand
}


export { serviceGetBrands, serviceGetBrand}