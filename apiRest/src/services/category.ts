import Category from '../models/Category'

const serviceGetCategories = async () =>{
    const categorys = await Category.find()
    return categorys
}

const serviceGetCategory = async (id : string) =>{
    const category =  await Category.findById(id)
    return category
}

export { serviceGetCategories, serviceGetCategory}