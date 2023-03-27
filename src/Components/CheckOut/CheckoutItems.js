import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import "./Checkout.css";

const CheckoutItems = (props) => {
  const { item, size, increment, decrement } = useContext(CartContext);
  const [cart, serCart] = useState([]);

  const removeCart = async () => {};

  return (
    <div>
      <div>
        <div
          style={{
            border: "1px solid #E7E7E7",
            width: "95%",
            display: "flex",
            height: "250px",
            margin: "25px",
          }}
        >
          <div style={{ margin: "25px" }}>
            <img height="200px" src="" />
          </div>
          <div style={{ marginTop: "20px" }}>
            <div style={{ fontSize: "20px" }} className="textgap">
              {" "}
              {/* New Apple iphone 12 (64GB)-Gold{" "} */}
              {props.defination.name}
            </div>
            <div style={{ fontWeight: "bold" }} className="textgap">
           {props.defination.price}
              70,000{" "}
            </div>
            <div className="textgap">In Stock</div>
            <button className="placeorder__button" onClick={removeCart}>
              Remove form Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItems;
