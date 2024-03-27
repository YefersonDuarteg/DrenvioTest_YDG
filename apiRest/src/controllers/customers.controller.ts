import {RequestHandler} from 'express'
import Customer from '../models/Customer'
import * as services from '../services/customer'


const getCustomers : RequestHandler = async (req, res)=>{
    try {
        const customers = await services.serviceGetCustomers()
        return res.json(customers)
    } catch (error) {
        res.json(error)        
    }
}

const getCustomer : RequestHandler = async ( req, res)=>{
    try {
        const customerFound = await services.serviceGetCustomer(req.params.id)
        if(!customerFound) return res.status(204).json()
        return res.json(customerFound)
    } catch (error) {
        res.json(error)        
    }
}

const createCustomer : RequestHandler = async (req, res)=>{
    try {
        const customer = new Customer(req.body)
        const saveCustomer = await customer.save()
        res.json(saveCustomer)
    } catch (error) {
        res.json(error) 
    }
}

const updateCustomer : RequestHandler = async (req, res)=>{
    try {
        const customerUpdate = await Customer.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!customerUpdate) return res.status(204).json()
        return res.json(customerUpdate)
    } catch (error) {
        res.json(error)
    }
}

const deleteCustomer : RequestHandler = async (req, res)=>{
    try {
        const customerFound = await Customer.findByIdAndDelete(req.params.id)
        if(!customerFound) return res.status(204).json()
        return res.json(customerFound)
    } catch (error) {
        res.json(error)
    }
}

const getProductSpecialpricing: RequestHandler = async (req, res) => {
    try {
        const productFound = await services.serviceGetSpecialpricing(req.params.user_id, req.params.nombre_producto)
        if (!productFound) return res.status(204).json()
        return res.json(productFound)
    } catch (error) {
        res.json(error)
    }
}


export { getCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer, getProductSpecialpricing}