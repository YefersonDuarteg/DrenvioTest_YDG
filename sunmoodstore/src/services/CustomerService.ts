import axios from 'axios'
import { Customer } from '../interfaces/intServices/Customer'

// const API = window.location.protocol+'//'+window.location.hostname+':5000'

const API = process.env.APP_API_URL != undefined ? process.env.APP_API_URL : 'http://localhost:5000';


export const getCustomers = async () =>{ 
    return await axios.get<Customer[]>(`${API}/customers`)
}

// export const getTotalCustomers = async () =>{
//     return await axios.get<Customer[]>(`${API}/customers/total`)
// }

export const getCustomer = async (id: string) =>{
    return await axios.get(`${API}/customers/${id}`)
}

export const createCustomer = async (custmer: Customer) =>{
    return await axios.post(`${API}/customers`, custmer)
}

export const updateCustomer = async (id: String, custmer:Customer) =>{
    return await axios.put<Customer[]>(`${API}/customers/${id}`, custmer)
}

export const deleteCustomer = async (id: String) =>{
    return await axios.delete<Customer[]>(`${API}/customers/${id}`)
}
