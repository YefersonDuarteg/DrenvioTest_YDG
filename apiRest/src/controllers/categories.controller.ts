import {RequestHandler} from 'express'
import Category from '../models/Category'
import * as services from '../services/category'


const getCategories : RequestHandler = async (req, res)=>{
    try {
        const categories = await services.serviceGetCategories()
        return res.json(categories)
    } catch (error) {
        res.json(error)        
    }
}

const getCategory : RequestHandler = async ( req, res)=>{
    try {
        const categoryFound = await services.serviceGetCategory(req.params.id)
        if(!categoryFound) return res.status(204).json()
        return res.json(categoryFound)
    } catch (error) {
        res.json(error)        
    }
}

const createCategory : RequestHandler = async (req, res)=>{
    try {
        const category = new Category(req.body)
        const saveCategory = await category.save()
        res.json(saveCategory)
    } catch (error) {
        res.json(error)
    }
}

const updateCategory : RequestHandler = async (req, res)=>{
    try {
        const categoryUpdate = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!categoryUpdate) return res.status(204).json()
        return res.json(categoryUpdate)
    } catch (error) {
        res.json(error)
    }
}

const deleteCategory : RequestHandler = async (req, res)=>{
    try {
        const categoryFound = await Category.findByIdAndDelete(req.params.id)
        if(!categoryFound) return res.status(204).json()
        return res.json(categoryFound)
    } catch (error) {
        res.json(error)
    }
}

export { getCategories, getCategory, createCategory, updateCategory, deleteCategory}