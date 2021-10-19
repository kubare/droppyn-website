import React, { useState } from 'react';
import Filter from '../Components/BuyComponents/Filter';
import BuyListProducts from '../Components/BuyComponents/BuyListProducts';

export default function BuyPage({ data }) {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const filteredProducts = data.filter(product => {
        return product.brand.toLowerCase().includes( search.toLowerCase() )  
    }) 
    
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <Filter handleSearch={handleSearch} />
                </div>
                <div className="col-sm-9">
                    <BuyListProducts filteredProducts={filteredProducts} />
                </div>
            </div>
        </div>
        </>
    )
}
