import axios from 'axios'
import { Product } from '../interfaces/intServices/Product'

// const API = window.location.protocol+'//'+window.location.hostname+':5000'
const API = process.env.APP_API_URL != undefined ? process.env.APP_API_URL : 'https://drenviotes-backend.onrender.com';

export const getProducts = async () =>{
    return await axios.get<Product[]>(`${API}/products`)
}

export const getTotalProducts = async () =>{
    return await axios.get<Product[]>(`${API}/products/total`)
}

export const getProduct = async (id: string) =>{
    return await axios.get(`${API}/products/${id}`)
}

export const createProduct = async (product: Product) =>{
    return await axios.post(`${API}/products`, product)
}

export const updateProduct = async (id: String, product:Product) =>{
    return await axios.put<Product[]>(`${API}/products/${id}`, product)
}

export const deleteProduct = async (id: String) =>{
    return await axios.delete<Product[]>(`${API}/products/${id}`)
}

export const getProductSpecialPrecie = async (id: String, name: String) =>{
    console.log(`${API}/price/${id}/${name}`)
    return await axios.get(`${API}/price/${id}/${name}`)
}