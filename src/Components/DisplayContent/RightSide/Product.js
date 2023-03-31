import React from "react";
import Rating from "@mui/material/Rating";
import getSymbolFromCurrency from "currency-symbol-map";
import "../RightSide/RightSide.css"

function Product(props) {
  return (
    <>
      <div className="product">
        <div className="product__image">
          <img src={props?.definition?.thumbnail} height="280px" />
        </div>
        <div className="product__name"> {props?.definition?.title}</div>
        <div className="product__rating">
          <Rating
            name="read-only"
            value="4"
            style={{ fontSize: "20px" }}
            readOnly
          />

          {props.definition.rating}
        </div>
        <div className="product__price">
          {getSymbolFromCurrency("USD")}
          {props?.definition?.price}
        </div>
      </div>
    </>
  );
}

export default Product;
