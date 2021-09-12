import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/ProductMiniature.css'

export const ProductMiniature = ({key, link, img, brand, model, date, price}) => {
    return (
        <div className="product" key={key}>
            <div className="product-border">
            <div className="product-img">
            <Link to={link}><img src={img} alt="image"/></Link>
            </div>
            <div className="text-background">
            <div className="text-header">
                {brand}
                </div>
                <div className="text-information">
                <p>{model}<br/>
                {date}<br/>
                {price}</p>
                </div>
            </div>
            </div>
        </div>
    )
}
