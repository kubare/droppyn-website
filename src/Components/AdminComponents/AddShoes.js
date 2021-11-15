import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Alert from "./Alert";

const initialValues = {
  id: "",
  brand: "",
  model: "",
  date: "",
  price: "",
  img: "",
};

export default function AddShoes(props) {
  const [values, setValues] = useState({
    id: "",
    brand: "",
    model: "",
    date: "",
    price: "",
    img: "",
  });
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleSetInputs = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   const shoesId = props.match.params.id;
  //   if(shoesId) {
  //     findShoesById(shoesId)
  //   }
  // }, [])

  // const findShoesById = (shoesId) => {
  //   axios.get("http://localhost:8080/api?index="+shoesId)
  //   .then(res => {
  //     if(res.data != null) {
  //       setValues(initialValues)
  //     }
  //   })
  // }

  let submitShoes = (event) => {
    event.preventDefault();

    axios.post("http://localhost:8080/api", values)
    .then((response) => {
      if (response.data != null) {
        setShow(true);
        setTimeout(() => setShow(false), 3000);
      } else {
        setShow(false);
      }
    });
    setValues(initialValues);
  };

  let handleClickUpdate = () => {
    history.push("/list")
  }

  return (
    <div>
      <div className="d-flex justify-content-center pt-5">
        <div className="border w-50 p-3">
           {show ? <Alert message="Success! You added your item!" /> : null} 
          <label for="formGroupExampleInput">Add Items</label>
          <form onSubmit={submitShoes}>
            <div class="row">
              <div class="col">
                <div class="form-outline">
                  <input
                    type="text"
                    name="brand"
                    value={values.brand}
                    onChange={handleSetInputs}
                    placeholder="brand"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input
                    type="text"
                    value={values.model}
                    name="model"
                    onChange={handleSetInputs}
                    placeholder="model"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col">
                <div class="form-outline">
                  <input
                    type="date"
                    value={values.date}
                    name="date"
                    onChange={handleSetInputs}
                    placeholder="date"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input
                    type="number"
                    value={values.price}
                    name="price"
                    onChange={handleSetInputs}
                    placeholder="price"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input
                    type="url"
                    value={values.img}
                    name="img"
                    onChange={handleSetInputs}
                    placeholder="img"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-end">
              <button
                style={{marginRight:"5px"}}
                type="submit"
                onSubmit={submitShoes}
                class="btn btn-primary"
              >
                Add
              </button>{' '}
              <button
                type="submit"
                onClick={handleClickUpdate}
                class="btn btn-primary"
              >
                List Items
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
