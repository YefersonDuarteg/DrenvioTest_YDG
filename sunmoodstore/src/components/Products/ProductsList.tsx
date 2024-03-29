import React, { useEffect, useState } from 'react'
import {Product} from '../../interfaces/intServices/Product'
import * as videoService from '../../services/ProductService'
// import ProductItem from './ProductItem'

const ProductList = () => {

  const [videos, setProducts] = useState<Product[]>([])

  const loadProducts = async () =>{
    const res = await videoService.getProducts()

    // const formateProducts =  res.data.map(video =>{
    //   return{
    //     ...video,
    //     createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
    //     updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date()
    //   }
    // })
    // .sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime())

    // setProducts(formateProducts);
  }

  useEffect(() => {
    loadProducts()
  }, [])
  

  return (
    <div className='row'>
        {/* {videos.map((video) =>{
          return <ProductItem video={video} key={video._id} loadProducts={loadProducts}></ProductItem>
        })} */}
    </div>
  )
}

export default ProductList