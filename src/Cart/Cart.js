import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setcartItems] = useState([]);
  useEffect(() => {
    if (window.localStorage.getItem("cartItems") && JSON.parse(window.localStorage.getItem("cartItems")).length > 0) {
      setcartItems(JSON.parse(window.localStorage.getItem("cartItems")));
    }
  }, []);

  const handleRemoveItem = (id) => {
    let filteredItems = cartItems.filter((c) => {
      return c.id !== id;
    });
    setcartItems(filteredItems);
    window.localStorage.setItem("cartItems", JSON.stringify(filteredItems));
    toast("removed from cart");
  };
  return (
    <>
      <div className="cart-container">
        <div className="order">
          <h2>Your Cart summary</h2>
          {cartItems.length > 0 &&
            cartItems?.map((c, index) => {
              return (
                <div className="item" key={index}>
                  <img src={c.thumbnail} alt="" />
                  <div className="info">
                    <h4>{c.title}</h4>
                    <p className="quantity">Quantity: 1</p>
                    <p className="price">${c.price}</p>
                    <button
                      onClick={() => handleRemoveItem(c.id)}
                      className="removeCart"
                    >
                      Remove from cart
                    </button>
                  </div>
                </div>
              );
            })}
          <ToastContainer />

          <h4 className="ship">Shipping: FREE</h4>
          <hr />
          <h3 className="total">
            TOTAL: ${cartItems.map((c) => c.price).reduce((a, b) => a + b, 0)}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Cart;
