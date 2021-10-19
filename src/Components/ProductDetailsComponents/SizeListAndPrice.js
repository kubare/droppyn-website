import React from 'react'
import { Form } from 'react-bootstrap'

export default function SizeListAndPrice(props) {
    return (
        <div class="d-flex align-items-center flex-column " style={{paddingTop: "13%", flexDirection:"column"}}>

            <div class="w-75 p-3">
            <Form.Select aria-label="Default select example">
            {props.size} 
            </Form.Select>
            </div>
            <div>
            <h4 className="font" style={{fontWeight: "bold"}}>{props.product.price}$</h4>
            </div>
            <button type="button" class="btn btn-success">Buy</button>
            <br/>
        </div>
    )
}
