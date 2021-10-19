import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import NameAndImageDetails from "../Components/ProductDetailsComponents/NameAndImageDetails";
import RelatedProducts from "../Components/ProductDetailsComponents/RelatedProducts";
import SizeListAndPrice from "../Components/ProductDetailsComponents/SizeListAndPrice";

function ProductDetails( props ) {

  const [data, setData] = useState([]);
 // const { model } = useParams();

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

  const product = data.find(x => x.model === props.match.params.model)
    if(!product) {
        return <div>Product not found</div>
    }
    
   /* const actualProduct = product.sizes.map((size) => (
    <option value={size}>{size}US</option>
  )); */

  return (
    <>
      <div style={{ paddingTop: "50px" }} class="container">
        <div class="row">
          <div
            class="col border-right"
            style={{ borderRight: "1px groove #F8F8FF" }}
          >
            <NameAndImageDetails product={product} /> 
          </div>
          <div class="col">
             <SizeListAndPrice product={product} /> 
          </div>
        </div>
        <div style={{paddingTop: "125px"}}>
        <RelatedProducts data={data} /> 
        </div>
      </div>

      <Link to="/">Back</Link>
    </>
  );
}

export default ProductDetails;
