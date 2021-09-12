import React from 'react';
import data from '../../pages/data';
import { ProductMiniatureBuy } from '../ProductMiniatureBuy'
export const ListProduct = () => {

  //  let fourProducts = data.products.slice(1, 4)
 //   fourProducts = fourProducts.map(product => (
     const product = data.products.map(product => (
        <ProductMiniatureBuy
        key={product.id} 
        link={`/product/${product.model}`} 
        img={product.img} 
        brand={product.brand} 
        model={product.model} 
        date={product.date} 
        price={product.price}
        />
       ))

    return (
        <>
        <div style={{justifyContent:"space-around", paddingTop:"20px"}} className="d-flex align-content-center flex-wrap pl-5 pr-5">
        {product}
        </div>
        </>
    )
}
