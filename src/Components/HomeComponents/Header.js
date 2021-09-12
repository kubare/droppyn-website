import React from 'react';
import h1 from '../../images/yzyheader.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div>
        <img src={h1} className="img-fluid mx-auto d-block" alt="header"/>
        </div>
    )
}

export default Header;