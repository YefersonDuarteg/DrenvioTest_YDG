import {RequestHandler} from 'express'
import Brand from '../models/Brand'
import * as services from '../services/brand'


const getBrands : RequestHandler = async (req, res)=>{
    try {
        const brands = await services.serviceGetBrands()
        return res.json(brands)
    } catch (error) {
        res.json(error)        
    }
}

const getBrand : RequestHandler = async ( req, res)=>{
    try {
        const brandFound = await services.serviceGetBrand(req.params.id)
        if(!brandFound) return res.status(204).json()
        return res.json(brandFound)
    } catch (error) {
        res.json(error)        
    }
}

const createBrand : RequestHandler = async (req, res)=>{
    try {
        const brand = new Brand(req.body)
        const saveBrand = await brand.save()
        res.json(saveBrand)
    } catch (error) {
        res.json(error) 
    }
}

const updateBrand : RequestHandler = async (req, res)=>{
    try {
        const brandUpdate = await Brand.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!brandUpdate) return res.status(204).json()
        return res.json(brandUpdate)
    } catch (error) {
        res.json(error)
    }
}

const deleteBrand : RequestHandler = async (req, res)=>{
    try {
        const brandFound = await Brand.findByIdAndDelete(req.params.id)
        if(!brandFound) return res.status(204).json()
        return res.json(brandFound)
    } catch (error) {
        res.json(error)
    }
}

export { getBrands, getBrand, createBrand, updateBrand, deleteBrand}