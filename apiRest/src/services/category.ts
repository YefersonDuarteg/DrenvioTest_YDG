import Category from '../models/Category'

const serviceGetCategories = async () =>{
    const videos = await Category.find()
    return videos
}

const serviceGetCategory = async (id : string) =>{
    const video =  await Category.findById(id)
    return video
}

export { serviceGetCategories, serviceGetCategory}