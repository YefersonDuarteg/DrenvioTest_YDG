import React, { useEffect, useState } from 'react'

import * as productService from '../../services/ProductService'
import * as customerService from '../../services/CustomerService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faBoxesPacking, faPerson, faDollar } from '@fortawesome/free-solid-svg-icons'
import Dahscards from './Dahscards'
import CardProduct from '../Products/CardProduct'
import ModalPrecies from './ModalPrecies';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


import '../../css/dashboard.css'
import '../../css/themify-icons.css'
import '../../css/linearicons.css'
import Product1 from '../../img/product/p1.jpg';


interface ProductMod {
    name: String;
    price: Number;
    stock: Number;
    color: String;
    brand: String;
    category: String;
}

interface CustomerMod {
    name: String
    specialPrices: String
}

const Dashboard = () => {

    const [ProductsMod, setProductsMod] = useState<ProductMod[]>([])
    const [ProductsStockMod, setProductsStockMod] = useState<ProductMod[]>([])
    const [CustomersMod, setCustomersMod] = useState<CustomerMod[]>([])
    const [totalProducts, setTotalProducts] = useState<Number>(0)
    const [totalStock, setTotalStock] = useState<Number>(0)
    const [totalCustomers, setTotalCustomers] = useState<Number>(0)

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const ProductsCount = async () => {
        const res = await productService.getTotalProducts()

        const products = await res.data.map(prod => {
            return {
                name: prod.name,
                description: prod.description,
                price: prod.price,
                stock: prod.stock,
                color: prod.color,
                brand: prod.brand,
                category: prod.category
            }
        })
        setProductsMod(products)
        const countTotal = products.length
        setTotalProducts(countTotal)

        const productStock = await products.filter(prt => {
            return prt.stock != 0
        })
        setProductsStockMod(productStock)
        const countTotalStock = (productStock).length
        setTotalStock(countTotalStock)
    }

    const CustomersCount = async () => {
        const res = await customerService.getCustomers()
        const customers = res.data.map(cust => {
            return {
                name: cust.name,
                specialPrices: (cust.specialPrices.length > 0) ? "YES" : "NO"
            }
        })

        setCustomersMod(customers)
        const customerTotal = customers.length
        setTotalCustomers(customerTotal)
    }

    useEffect(() => {
        ProductsCount()
        CustomersCount()
    }, [])

    return (
        <div>
            <div className="banner-initial card container ps-sm-5">
                <div className="px-5">
                    <div className="row">
                        <Dahscards icon={faBox} backgroundColor="sbg1" title="Total Models Products" value={totalProducts} data={ProductsMod} />
                        <Dahscards icon={faBoxesPacking} backgroundColor="sbg2" title="Models Products in Stock" value={totalStock} data={ProductsStockMod} />
                        <Dahscards icon={faPerson} backgroundColor="sbg3" title="Customers" value={totalCustomers} data={CustomersMod} />
                        {/* <Dahscards icon={faDollar} backgroundColor="sbg4" title="See special price " value={0} data={[]} /> */}
                        <div className="d-flex justify-content-center pt-5">
                            <Button className="btn btn-success" onClick={handleShow} style={{width:"200px", height:"60px"}}>
                                <FontAwesomeIcon icon={faDollar} style={{ color: "white" }} />
                                <span style={{marginLeft:"10px"}}>Special Prices</span>
                            </Button>
                            <ModalPrecies title={"Special Prices"} showModal={showModal} handleClose={handleClose}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-2 p-3">
                <div className="col-xl-3 col-lg-4 col-md-5 card card-body">
                    <div className="sidebar-filter mt-50">
                        <div className="top-filter-head">Product Filters</div>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-8 col-md-7 px-4 py-3 card card-body">
                    <div className="top-store-section">Product Store</div>
                    <section className="lattest-product-area pb-40 category-list">
                        <div className="row">
                        {ProductsMod.map((product) => (
                            <CardProduct Name={product.name} Brand={product.brand} Precio={product.price} imgProduct={Product1}/>
                        ))}
                        </div>
                    </section>
                </div>
            </div>
            <footer className="footer fixed-bottom">
                <div className="row text-center p-3">
                    <p className="small text-muted">Develop & Design by @Yeferson Duarte G</p>
                </div>
            </footer>

        </div>
    )
}

export default Dashboard