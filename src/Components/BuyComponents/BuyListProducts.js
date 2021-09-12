import React  from 'react';
import { ProductMiniatureBuy } from '../ProductMiniatureBuy';

const BuyListProducts = (props) => {

    const list = props.filteredProducts.map(item => (
        <>
        <ProductMiniatureBuy 
        key={item.id} 
        img={item.img} 
        brand={item.brand} 
        model={item.model} 
        link={`/buys/${item.model}`} 
        date={item.date} 
        price={item.price} />
        </>

    ))

    return (
        <div style={{justifyContent:"space-around", paddingTop:"20px"}} className="d-flex align-content-center flex-wrap">
            {list}
        </div>
    )
}

export default BuyListProducts;