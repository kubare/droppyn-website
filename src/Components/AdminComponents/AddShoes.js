import React, { Component } from "react";
import axios from "axios";

export default class AddShoes extends Component {
  constructor(props) {
    super(props);
    this.state = this.startValue;
    this.shoesChange = this.shoesChange.bind(this);
    this.submitShoes = this.submitShoes.bind(this);
  }

  startValue = {
    brand: "",
    model: "",
    date: "",
    price: "",
    img: "",
  };

  shoesChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitShoes = (event) => {
    event.preventDefault();

    const shoes = {
      brand: this.state.brand,
      model: this.state.model,
      date: this.state.date,
      price: this.state.price,
      img: this.state.img,
    };

    axios.post("http://localhost:8080/api", shoes).then((response) => {
      if (response.data != null) {
        this.setState(this.startValue);
        alert("great!");
      }
    });

    this.setState(this.initialState);
  };

  render() {
    const { brand, model, date, price, img } = this.state;

    return (
      <div className="d-flex justify-content-center pt-5">
        <div className="border w-50 p-3">
          <label for="formGroupExampleInput">Add Items</label>
          <form onSubmit={this.submitShoes}>
            <div class="row">
            
              <div class="col">
                <div class="form-outline">
                  <input
                    type="text"
                    value={brand}
                    name="brand"
                    onChange={this.shoesChange}
                    placeholder="brand"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input
                    type="text"
                    value={model}
                    name="model"
                    onChange={this.shoesChange}
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
                    value={date}
                    name="date"
                    onChange={this.shoesChange}
                    placeholder="date"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input
                    type="text"
                    value={price}
                    name="price"
                    onChange={this.shoesChange}
                    placeholder="price"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input
                    type="text"
                    value={img}
                    name="img"
                    onChange={this.shoesChange}
                    placeholder="img"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-end">
              <button
                type="submit"
                onSubmit={this.submitShoes}
                class="btn btn-primary"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
