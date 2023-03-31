import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PlaceOrder.css";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar/Navbar";
function PlaceOrder(props) {
  let params = useParams();
  const [product, setProductData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params?.id}`)
      .then((res) => res.json())
      .then(setProductData);
    // .then(console.log);
    console.log(setProductData);
    if (JSON.parse(window.localStorage.getItem("cartItems"))) {
      setCart(JSON.parse(window.localStorage.getItem("cartItems")));
    }
  }, []);
  console.log(product, "products");
  const [orderplaced, setOrderPLaced] = useState("");
  const [localitemgot, setlocalitemsGot] = useState("");
  const [cartItems, setcartItems] = useState([]);
  const [numcheck, setNumCheck] = useState([]);

  let checkStatus = () => {
    cartItems?.map((item) => {
      if (product?.id !== item.id) {
        let nuwAr = [...numcheck];
        nuwAr.push("true");
        setNumCheck(nuwAr);
      }
    });

    if(!cartItems){
      return 'not exist'
    }
    else {

    if (numcheck.length === cartItems?.length) return "not exist";
    return "exist";}
  };

  const addToCart = () => {
    setcartItems(JSON.parse(window.localStorage.getItem("cartItems")));
    setlocalitemsGot("got");
  };
  const buyNow = () => {
    let checkOutItems = [];
    checkOutItems.push(product);
    window.localStorage.setItem("checkOutItems", JSON.stringify(checkOutItems));
    window.location.href = "/CheckOut";
  };

  useEffect(() => {
    if (localitemgot) {
      if (checkStatus() === "not exist") {
        setOrderPLaced("added");
        let cartt = cart;
        cartt.push(product);
        window.localStorage.setItem("cartItems", JSON.stringify(cartt));
        console.log(cartt);
        toast("Item added to cart");
      } else {
        toast("Item already exists");
      }
    }
    setlocalitemsGot("");
  }, [localitemgot]);

  return (
    <>
      <Navbar orderPlaced={orderplaced} setOrderPLaced={setOrderPLaced} />
      <div className="placerder">
        <div className="placeorder" container key={product.title}>
          <div className="place-img">
            <img className="placeorder__image" src={product.thumbnail} alt="" />
          </div>
          <div className="place-desc">
            <div>
              <div className="placeholder__description">
                <div
                  className="desc"
                  style={{
                    fontSize: "24px",
                    lineHeight: "32px",
                    fontWeight: 500,
                  }}
                >
                  {product.description}
                </div>
                <div>
                  <Rating
                    name="read-only"
                    value="3"
                    readOnly
                    style={{ fontSize: "20px" }}
                  />
                  {product.rating} ratings |{product.stock}+ answered questions
                </div>
                <hr></hr>
                <div>
                  <div className="textgap">
                    Price: <span className="pricetag">${product.price}</span>
                  </div>
                  <div className="textgap">
                    FREE delivery: <strong>0</strong>
                  </div>
                  <div className="textgap">
                    EMI starts at ${product.discountPercentage}. No Cost EMI
                    available
                  </div>
                  <div
                    style={{ color: "#007600", fontSize: "20px" }}
                    className="textgap"
                  >
                    {product.status}
                  </div>
                  <div className="textgap">
                    Sold by <strong>{product.brand}</strong> and Fulfilled by
                    Shopping.co
                  </div>
                </div>
                <div>
                  <br></br>
                  <div style={{ fontSize: "24px" }} className="textgap">
                    <h4>About this item</h4>
                    {product.description}
                  </div>
                </div>

                <div>
                  {product?.products?.length > 0 &&
                    product?.products?.map((item, index) => (
                      <Link to={`/Checkout/` + item.id} key={index}></Link>
                    ))}
                </div>
              </div>
            </div>
            <div className="place-cart">
              <div item xs={3}>
                <Paper variant="outlined" className="placeorder__order">
                  <div className="place">
                    <div>
                      <strong>Without Exchange</strong>
                    </div>
                    <div>50,999</div>
                    <div style={{ marginTop: "10px" }}>
                      <strong>Add an Accessory</strong>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"></input>Apple Airpods
                      </label>
                      <br></br>
                      <label>
                        <input type="checkbox"></input>Apple 20W USB Power
                        Adapter
                      </label>
                    </div>
                    <div className="cart-btn">
                      <button
                        onClick={() => addToCart()}
                        className="placeorder__button addtocart"
                      >
                        Add to Cart
                      </button>
                      <ToastContainer />

                      {/* <Link to="/CheckOut"> */}
                      <button
                        onClick={() => buyNow()}
                        className="placeorder__button buynow"
                      >
                        Buy Now
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </Paper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaceOrder;
