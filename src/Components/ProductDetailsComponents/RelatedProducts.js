import React from "react";
import { ProductMiniatureBuy } from "../ProductMiniatureBuy";

export default function RelatedProducts({ data }) {
  let fourProducts = data.slice(3, 9);
  fourProducts = fourProducts.map((product) => (
    <ProductMiniatureBuy
      key={product.id}
      link={`/product/${product.model}`}
      img={product.img}
      brand={product.brand}
      model={product.model}
      date={product.date}
      price={product.price}
    />
  ));
  return (
    <>
      <div style={{ borderTop: "1px groove #F8F8FF" }}>
        <div style={{ paddingLeft: "9%", }}>
          <div
            className="font"
            style={{
              fontWeight: "bold",
              border: "1px groove #F8F8FF",
              borderTop: "none",
              padding: "10px",
              width: "15%",
            }}
          >
            <div style={{ textAlign: "center" }}>Related Prodcuts</div>
          </div>
        </div>

        <div
          className="d-flex align-content-center flex-wrap"
          style={{
            justifyContent: "space-around",
            paddingTop: "15px"
          }}
        >
          {fourProducts}
        </div>
      </div>
    </>
  );
}
