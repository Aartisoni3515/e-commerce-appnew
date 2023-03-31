import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Checkout.css";
import Navbar from "../Navbar/Navbar";

const Checkout = () => {
  const [checkOutItems, setcheckOutItems] = useState([]);
  useEffect(() => {
    if (
      window.localStorage.getItem("checkOutItems") &&
      JSON.parse(window.localStorage.getItem("checkOutItems")).length > 0
    ) {
      setcheckOutItems(
        JSON.parse(window.localStorage.getItem("checkOutItems"))
      );
    }
  }, []);
  const navigate = useNavigate();
  const checkOut = () => {
    navigate("/");
  };

  return (
    <>
     <Navbar />
      <div id="wrapper">
        <div className="container1">
          <div className="order">
            <h2>Your order summary</h2>
            {checkOutItems.length > 0 &&
              checkOutItems?.map((c) => {
                return (
                  <div className="item">
                    <img src={c.thumbnail} alt="" />
                    <div className="info">
                      <h4>{c.title}</h4>
                      <p className="quantity">Quantity: 1</p>
                      <p className="price">${c.price}</p>
                    </div>
                    {/* <button onClick={()=>RemoveItem(c.id)}  className='removeCart' >Remove Item</button> */}
                  </div>
                );
              })}

            <h4 className="ship">Shipping: FREE</h4>
            <hr />
            <h3 className="total">
              TOTAL: $
              {checkOutItems.map((c) => c.price).reduce((a, b) => a + b, 0)}
            </h3>
          </div>
        </div>

        <div className="container2">
          <div className="checkout">
            <div className="payment">
              <div className="content">
                <div className="infos">
                  <div className="method">
                    <h2>Choose a payment method</h2>
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1978060/visa.png"
                      alt=""
                      className="visa"
                    />
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1978060/mastercard.png"
                      alt=""
                      className="mastercard"
                    />
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1978060/paypal.png"
                      alt=""
                      className="paypal"
                    />
                  </div>
                  <div className="cardNumber">
                    <p className="title">Credit card number</p> <br />
                    <input type="text" className="number" />
                    <input type="text" className="number" />
                    <input type="text" className="number" />
                    <input type="text" className="number" />
                  </div>
                  <div className="cardHolderName">
                    <p className="title">Card holder name</p>
                    <input type="text" />
                  </div>
                  <div className="expiration">
                    <p className="title">Expiration date</p>
                    <select>
                      <option>Month</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>

                    <select>
                      <option>Year</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                    </select>
                  </div>
                  <div className="security">
                    <p className="title">Security</p>
                    <input type="text" />
                  </div>
                  <button onClick={checkOut}>Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
