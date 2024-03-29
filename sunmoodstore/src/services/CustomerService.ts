import axios from 'axios'
import { Customer } from '../interfaces/intServices/Customer'

const API = 'http://localhost:5000'

export const getCustomers = async () =>{
    return await axios.get<Customer[]>(`${API}/customers`)
}

// export const getTotalCustomers = async () =>{
//     return await axios.get<Customer[]>(`${API}/customers/total`)
// }

export const getCustomer = async (id: string) =>{
    return await axios.get(`${API}/customers/${id}`)
}

export const createCustomer = async (video: Customer) =>{
    return await axios.post(`${API}/customers`, video)
}

export const updateCustomer = async (id: String, video:Customer) =>{
    return await axios.put<Customer[]>(`${API}/customers/${id}`, video)
}

export const deleteCustomer = async (id: String) =>{
    return await axios.delete<Customer[]>(`${API}/customers/${id}`)
}
