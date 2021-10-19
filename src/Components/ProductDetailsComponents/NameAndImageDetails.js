import React from 'react'

export default function NameAndImageDetails(props) {
    return (
        <div>
            <div style={{fontWeight: "bold", fontSize: "20px"}} className="font">{props.product.brand}</div>
            <div className="font">{props.product.model}</div>
            <img src={props.product.img} style={{maxWidth: "60%", maxHeight: "auto", paddingTop:"10px", }} className="img-fluid mx-auto d-block" alt="header"/>            
        </div>
    )
}
