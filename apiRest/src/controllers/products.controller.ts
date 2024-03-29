import { RequestHandler } from 'express'
import Product from '../models/Product'
import * as services from '../services/product'


const getProducts: RequestHandler = async (req, res) => {
    try {
        const products = await services.serviceGetProducts()
        return res.json(products)
    } catch (error) {
        res.json(error)
    }
}

const getTotalProducts: RequestHandler = async (req, res) => {
    try {
        const products = await services.serviceGetTotalProducts()
        return res.json(products)
    } catch (error) {
        res.json(error)
    }
}

const getProduct: RequestHandler = async (req, res) => {
    try {
        const productFound = await services.serviceGetProduct(req.params.id)
        if (!productFound) return res.status(204).json()
        return res.json(productFound)
    } catch (error) {
        res.json(error)
    }
}

const createProduct: RequestHandler = async (req, res) => {
    try {
        const product = new Product(req.body)
        const saveProduct = await product.save()
        res.json(saveProduct)
    } catch (error) {
        res.json(error)
    }

}

const updateProduct: RequestHandler = async (req, res) => {
    try {
        const productUpdate = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!productUpdate) return res.status(204).json()
        return res.json(productUpdate)
    } catch (error) {
        res.json(error)
    }
}

const deleteProduct: RequestHandler = async (req, res) => {
    try {
        const productFound = await Product.findByIdAndDelete(req.params.id)
        if (!productFound) return res.status(204).json()
        return res.json(productFound)
    } catch (error) {
        res.json(error)
    }
}

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct,getTotalProducts }