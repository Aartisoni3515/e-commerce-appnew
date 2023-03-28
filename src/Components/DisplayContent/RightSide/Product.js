import React from "react";
import Rating from "@mui/material/Rating";
import getSymbolFromCurrency from "currency-symbol-map";

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
          {props?.definition?.id}

          {/* {props.definition.rating} */}
        </div>
        <div className="product__price">
          {getSymbolFromCurrency("INR")}
          {props?.definition?.title}
        </div>
      </div>
    </>
  );
}

export default Product;
