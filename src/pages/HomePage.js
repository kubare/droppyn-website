import React from 'react';
import { ListProduct } from '../Components/HomeComponents/ListProduct';
import Header from '../Components/HomeComponents/Header';

const HomePage = () => {

    return (
        <>
            <div className="float-right">
                <Header />
            </div>
        
            <div style={{paddingTop:"35px", paddingBottom:"10px"}} className="text-center">
                <h3 className="font">Hot Releases</h3>
            </div>
    
            <div className="row">
                <div className="col">
                </div>
                <div className="col-6">
                <ListProduct />
                </div>
                <div className="col">
                </div>
            </div>
        </>
    )
}

export default HomePage;