import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PlaceOrder.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Checkout from "../CheckOut/Checkout";
function PlaceOrder(props) {
  const [product, setProductData] = useState([]);
  let params = useParams();
  console.log(params, "params");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/1/${params?.id}`).then((res) =>
      res.json()
    );
    //   .then(console.log);
    console.log(setProductData);
  }, []);
  console.log(product?.products, "products");

  return (
    <div>
      <div className="RightSide__main"></div>
      <Grid container key={product.title}>
        <Grid item xs={5}>
          <img className="placeorder__image" src={product.thumbnail} />
        </Grid>
        <Grid item xs={4}>
          <div className="placeholder__description">
            <div
              style={{ fontSize: "24px", lineHeight: "32px", fontWeight: 500 }}
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
                Price: <span className="pricetag">₹ {product.price}</span>
              </div>
              <div className="textgap">
                FREE delivery: <strong></strong>
              </div>
              <div className="textgap">
                EMI starts at ₹ {product.discountPercentage}. No Cost EMI
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
                About this item
                {product.description}
              </div>
              <div>
                {product?.products?.length > 0 &&
                  product?.products?.map((item, index) => (
                    <Link to={`/` + item.id} key={index}></Link>
                  ))}
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <Paper variant="outlined" className="placeorder__order">
            <div>
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
                  <input type="checkbox"></input>Apple 20W USB Power Adapter
                </label>
              </div>
              <div>
                <button className="placeorder__button addtocart">
                  Add to Cart
                </button>

                <Link to="/CheckOut">
                  <button className="placeorder__button buynow">Buy Now</button>
                </Link>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default PlaceOrder;
