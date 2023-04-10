import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";
import Navbar from "../Components/Navbar/Navbar";
import CartChild from "./CartChild";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setcartItems] = useState([]);
  const [localitemgot, setlocalitemsGot] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (
      window.localStorage.getItem("cartItems") &&
      JSON.parse(window.localStorage.getItem("cartItems")).length > 0
    ) {
      setcartItems(JSON.parse(window.localStorage.getItem("cartItems")));
    }
  }, []);

  const handleRemoveItem = (id) => {
   console.log(id,'clicked')

    let filteredItems = cartItems.filter((c) => {
      return c!== id;
      // console.log(c,'inside map')
    });
    window.localStorage.setItem("cartItems", JSON.stringify(filteredItems));
    toast("removed from cart");
    setlocalitemsGot("got")
    window.location.reload()
  };
  const showList = true;


  useEffect(() => {
    if(localitemgot){
    setcartItems(JSON.parse(window.localStorage.getItem("cartItems")));}
    setlocalitemsGot("")

  }, [localitemgot]);





  return (
    <>
     <Navbar />
    
        <div className="cart-container">
          <div className="order">
            <h2>Your Cart summary</h2>
            {cartItems.length > 0 &&
              cartItems?.map((c, index) => {
                return (
                  <div>
                    {/* <h3  className="div" >noting to show in cart</h3> */}
                  <CartChild 
                   index={index}
                   id={c}
                   handleRemoveItem={(data)=>handleRemoveItem(data)}
                   setPrice={setPrice}
                   price={price}

                  />
                  </div>
                );
              })}
            <ToastContainer/>

            <h4 className="ship">Shipping: FREE</h4>
            <hr />
            <h3 className="total">
         <Link to="/products" >  <button  className="removeCart">Shop more</button></Link>
            </h3>
          </div>
        </div>
    </>
  );
};

export default Cart;
