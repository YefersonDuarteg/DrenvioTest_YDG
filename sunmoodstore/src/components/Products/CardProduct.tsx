import React from 'react'

interface CardProductsProps {
    Name: String;
    Precio: Number;
    Brand: String;
    imgProduct:string;
}

const CardProduct = ({Name, Precio, Brand, imgProduct} : CardProductsProps) => {
  return (
    <div className="col-lg-4 col-md-6">
        <div className="single-product">
            <img className="img-fluid" src={imgProduct}/>
            <div className="product-details">
                <h6>{Name}</h6>
                <h4>{Brand}</h4>
                <div className="price">
                    <h6>${Precio.toString()}</h6>
                    {/* <h6 className="l-through"></h6> */}
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
  )
}

export default CardProduct