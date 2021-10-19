import React from 'react'
import { Col, Form } from 'react-bootstrap'

export default function Filter(props) {

    return (
        <div style={{paddingTop: "40px"}}>
        <div className="font">
            <h5>Search for items..</h5>
        </div>
            <Form.Control type="text" placeholder="Search" onChange={props.handleSearch}/>
        {/*      <div className="font" style={{paddingTop: "30px", fontWeight: "bold"}}>
            <Col sm={10}>
                <Form.Check
                type="radio"
                label="Nike"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                />
                <Form.Check
                type="radio"
                label="Adidas"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
                />
                <Form.Check
                type="radio"
                label="Asisc"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
                />
            </Col>
    </div> */}
        </div>
    )
}

    