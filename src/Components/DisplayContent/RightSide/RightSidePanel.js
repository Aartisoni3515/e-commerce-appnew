import React, { useEffect, useState } from "react";
import "./RightSide.css";
import Product from "./Product";
import {  useParams } from "react-router-dom";

function RightSidePanel(props) {
  const [product, setProductData] = useState([]);
    let params=useParams()
    console.log(params,'params')
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${params?.id}`)
      .then((res) => res.json())
      // .then(console.log);
      .then(setProductData);
  }, []);
  console.log(product?.products, "products");

  return (
    <div className="RightSide__main">
      {product?.products?.length > 0 &&
        product?.products?.map((item, index) => (
          <a href={`PlaceOrder/` + item.id}>
          <Product definition={item} />
          </a>
        ))}
    </div>
  );
}

export default RightSidePanel;
       

