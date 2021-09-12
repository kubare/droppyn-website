import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import { Card } from 'react-bootstrap';

export const ProductMiniatureBuy = ({link, img, brand, model, date, price}) => {
    return (
        <div className="p-2">
        <Card className="border border-light rounded-0" style={{ width: '10rem', fontWeight: "bold" }}>
            <Link to={link}><Card.Img style={{ padding: "10px" }} variant="top" src={img} /></Link>
            <Card.Body className="bg-light">
                <Card.Title style={{ fontWeight: "bold" }} className="font">{brand}</Card.Title>
                <Card.Text className="font" style={{fontSize: "13px"}}>
                {model}<br/>
                {date}<br/>
                {price}
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}
