import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

export default function ListShoes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/all')
    .then(res => {
      console.log(res)
      setData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, []); 
 

    const totalItems = data.length

     const deleteShoes = (shoesId) => {
         axios.delete("http://localhost:8080/api/all?index="+shoesId)
         .then(res => {
           if(res.data != null) {
             alert("shoes deleted!")
             setData(data.filter(shoes => shoes.id !== shoesId))
           }
         })
     }

  return (
      <div className="pt-2 d-flex justify-content-center">
    <div className="border w-75 p-3">
        <label className="font" style={{ fontWeight: "bold" }}>List of products</label><br />
        <label className="font">List of all available products: {totalItems}</label>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">IMG</th>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Date</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            {data.map((item) => 
          <tr>
            <th><Image src={item.img} thumbnail width="35" height="35"/></th>
            <td>{item.brand}</td>
            <td>{item.model}</td>
            <td>{item.date}</td>
            <td>{item.price}$</td>
            <td>
              <button onClick={() => deleteShoes(item.id)}>DEL</button>
              <Link to={"/edit/"+item.id}><button>UPD</button></Link>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>

  );
}
