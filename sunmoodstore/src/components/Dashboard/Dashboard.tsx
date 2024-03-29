import React, { useEffect, useState } from 'react'
import { Product } from '../../interfaces/intServices/Product'
import * as productService from '../../services/ProductService'
import * as customerService from '../../services/CustomerService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faBoxesPacking, faPerson } from '@fortawesome/free-solid-svg-icons'
import Dahscards from './Dahscards'
import Modal from './Modal';
import Modal from 'react-bootstrap/Modal';
import '../../css/dashboard.css'
import '../../css/themify-icons.css'
import '../../css/linearicons.css'
import ProductOne from '../../img/product/p1.jpg';
import ProductTwo from '../../img/product/p2.jpg';
import ProductThree from '../../img/product/p3.jpg';
import ProductFour from '../../img/product/p4.jpg';
import ProductFive from '../../img/product/p5.jpg';
import ProductSix from '../../img/product/p6.jpg';


const Dashboard = () => {

    const [totalProducts, setTotalProducts] = useState<Number>() 
    const [totalStock, setTotalStock] = useState<Number>()
    const [totalCustomers, setTotalCustomers] = useState<Number>()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const data = [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Jane', age: 25 },
        { id: 3, name: 'Doe', age: 35 },
    ];

    const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const ProductoCount = async () => {
        const total = await productService.getTotalProducts()
        const countTotal = (total).data.length 
        setTotalProducts(countTotal)
        const productStock =  total.data.filter(prt =>{
            return prt.stock != 0
        })
        const countTotalStock = (productStock).length 
        setTotalStock(countTotalStock)
    }

    const CustomersCount = async () =>{
        const total = await customerService.getCustomers()
        const customerTotal = (total).data.length 
        setTotalCustomers(customerTotal)
    }

    useEffect(() => {
        ProductoCount()
        CustomersCount()
        
    },)


    return (
        <div>
            <div className="banner-initial card container p-5">
                <div className="px-5">
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} data={data} />
                    <div className="row">
                        <button onClick={handleOpenModal}>Abrir Modal</button>
                        <Dahscards icon={faBox} backgroundColor="sbg1" title="Total Models Products" value={totalProducts}/>
                        <Dahscards icon={faBoxesPacking} backgroundColor="sbg2" title="Models Products in Stock" value={totalStock} />
                        <Dahscards icon={faPerson} backgroundColor="sbg3" title="Customers" value={totalCustomers} />
                    </div>
                </div>
            </div>
            <div className="row mt-2 p-3">
                <div className="col-xl-3 col-lg-4 col-md-5 card card-body">
                <div className="sidebar-filter mt-50">
					<div className="top-filter-head">Product Filters</div>
					<div className="common-filter">
						<div className="head">Brands</div>
						<form action="#">
							<ul>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="apple" name="brand"/><label>Apple<span>(29)</span></label></li>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="asus" name="brand"/><label>Asus<span>(29)</span></label></li>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="gionee" name="brand"/><label>Gionee<span>(19)</span></label></li>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="micromax" name="brand"/><label>Micromax<span>(19)</span></label></li>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="samsung" name="brand"/><label>Samsung<span>(19)</span></label></li>
							</ul>
						</form>
					</div>
					<div className="common-filter">
						<div className="head">Color</div>
						<form action="#">
							<ul>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="black" name="color"/><label>Black<span>(29)</span></label></li>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="balckleather" name="color"/><label>Black
										Leather<span>(29)</span></label></li>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="blackred" name="color"/><label>Black
										with red<span>(19)</span></label></li>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="gold" name="color"/><label>Gold<span>(19)</span></label></li>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="spacegrey" name="color"/><label>Spacegrey<span>(19)</span></label></li>
							</ul>
						</form>
					</div>
					<div className="common-filter">
						<div className="head">Price</div>
						<div className="price-range-area">
							<div id="price-range"></div>
							<div className="value-wrapper d-flex">
								<div className="price">Price:</div>
								<span>$</span>
								<div id="lower-value"></div>
								<div className="to">to</div>
								<span>$</span>
								<div id="upper-value"></div>
							</div>
						</div>
					</div>
				</div>
                </div>
                <div className="col-xl-9 col-lg-8 col-md-7 px-4 py-3 card card-body">
                <div className="top-store-section">Product Store</div>
                    <section className="lattest-product-area pb-40 category-list">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-product">
                                    <img className="img-fluid" src={ProductOne} alt=""/>
                                    <div className="product-details">
                                        <h6>addidas New Hammer sole
                                            for Sports person</h6>
                                        <div className="price">
                                            <h6>$150.00</h6>
                                            <h6 className="l-through">$210.00</h6>
                                        </div>
                                        <div className="prd-bottom">
                                            <a href="" className="social-info">
                                                <span className="ti-bag"></span>
                                                <p className="hover-text">add to bag</p>
                                            </a>
                                            <a href="" className="social-info">
                                                <span className="lnr lnr-heart"></span>
                                                <p className="hover-text">Wishlist</p>
                                            </a>
                                            <a href="" className="social-info">
                                                <span className="lnr lnr-sync"></span>
                                                <p className="hover-text">compare</p>
                                            </a>
                                            <a href="" className="social-info">
                                                <span className="lnr lnr-move"></span>
                                                <p className="hover-text">view more</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-product">
                                    <img className="img-fluid" src={ProductTwo} alt=""/>
                                    <div className="product-details">
                                        <h6>addidas New Hammer sole
                                            for Sports person</h6>
                                        <div className="price">
                                            <h6>$150.00</h6>
                                            <h6 className="l-through">$210.00</h6>
                                        </div>
                                        <div className="prd-bottom">

                                            <a href="" className="social-info">
                                                <span className="ti-bag"></span>
                                                <p className="hover-text">add to bag</p>
                                            </a>
                                            <a href="" className="social-info">
                                                <span className="lnr lnr-heart"></span>
                                                <p className="hover-text">Wishlist</p>
                                            </a>
                                            <a href="" className="social-info">
                                                <span className="lnr lnr-sync"></span>
                                                <p className="hover-text">compare</p>
                                            </a>
                                            <a href="" className="social-info">
                                                <span className="lnr lnr-move"></span>
                                                <p className="hover-text">view more</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-product">
                                    <img className="img-fluid" src={ProductThree} alt=""/>
                                    <div className="product-details">
                                        <h6>addidas New Hammer sole
                                            for Sports person</h6>
                                        <div className="price">
                                            <h6>$150.00</h6>
                                            <h6 className="l-through">$210.00</h6>
                                        </div>
                                        <div className="prd-bottom">

                                            <a href="" className="social-info">
                                                <span className="ti-bag"></span>
                                                <p className="hover-text">add to bag</p>
                                            </a>
                                            <a href="" className="social-info">
                                                <span className="lnr lnr-heart"></span>
                                                <p className="hover-text">Wishlist</p>
                                            </a>
                                            <a href="" className="social-info">
                                                <span className="lnr lnr-sync"></span>
                                                <p className="hover-text">compare</p>
                                            </a>
                                            <a href="" className="social-info">
                                                <span className="lnr lnr-move"></span>
                                                <p className="hover-text">view more</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-product">
                                    <img className="img-fluid" src={ProductFour} alt=""/>
                                    <div className="product-details">
                                        <h6>addidas New Hammer sole
                                            for Sports person</h6>
                                        <div className="price">
                                            <h6>$150.00</h6>
                                            <h6 className="l-through">$210.00</h6>
                                        </div>
                                        <div className="prd-bottom">

                                            <a href="" className="social-info">
                                                <span className="ti-bag"></span>
                                                <p className="hover-text">add to bag</p>
                                            </a>
                                            <a href="" className="social-info">
                                                <span className="lnr lnr-heart"></span>
                                                <p className="hover-text">Wishlist</p>
                                            </a>
                                            <a href="" className="social-info">
                                                <span className="lnr lnr-sync"></span>
                                                <p className="hover-text">compare</p>
                                            </a>
                                            <a href="" className="social-info">
                                                <span className="lnr lnr-move"></span>
                                                <p className="hover-text">view more</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-product">
                                    <img className="img-fluid" src={ProductFive} alt=""/>
                                    <div className="product-details">
                                        <h6>addidas New Hammer sole
                                            for Sports person</h6>
                                        <div className="price">
                                            <h6>$150.00</h6>
                                            <h6 className="l-through">$210.00</h6>
                                        </div>
                                        <div className="prd-bottom">

                                            <a href="" className="social-info">
                                                <span className="ti-bag"></span>
                                                <p className="hover-text">add to bag</p>
                                            </a>
                                            <a href="" className="social-info">
                                                <span className="lnr lnr-heart"></span>
                                                <p className="hover-text">Wishlist</p>
                                            </a>
                                            <a href="" className="social-info">
                                                <span className="lnr lnr-sync"></span>
                                                <p className="hover-text">compare</p>
                                            </a>
                                            <a href="" className="social-info">
                                                <span className="lnr lnr-move"></span>
                                                <p className="hover-text">view more</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-product">
                                    <img className="img-fluid" src={ProductSix} alt=""/>
                                    <div className="product-details">
                                        <h6>addidas New Hammer sole
                                            for Sports person</h6>
                                        <div className="price">
                                            <h6>$150.00</h6>
                                            <h6 className="l-through">$210.00</h6>
                                        </div>
                                        <div className="prd-bottom">

                                            <a href="" className="social-info">
                                                <span className="ti-bag"></span>
                                                <p className="hover-text">add to bag</p>
                                            </a>
                                            <a href="" className="social-info">
                                                <span className="lnr lnr-heart"></span>
                                                <p className="hover-text">Wishlist</p>
                                            </a>
                                            <a href="" className="social-info">
                                                <span className="lnr lnr-sync"></span>
                                                <p className="hover-text">compare</p>
                                            </a>
                                            <a href="" className="social-info">
                                                <span className="lnr lnr-move"></span>
                                                <p className="hover-text">view more</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
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