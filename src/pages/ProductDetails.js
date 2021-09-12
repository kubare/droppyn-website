import React from 'react';
import {Link} from 'react-router-dom';
import data from './data'

function ProductDetails(props) {

    const product = data.products.find(x => x.model === props.match.params.model)
    if(!product) {
        return <div>Product not found</div>
    }
    return (
        <>
        <div>
            <img src={product.img} alt={product.model} width="500" height="600" />
            <h5>{product.brand}</h5>
            <p>{product.model}<br/>
            {product.date}<br/>
            {product.price}</p>
        </div>
            <Link to="/">Back</Link>
        </>
    )
}

export default ProductDetails;