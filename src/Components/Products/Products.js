import React, { useEffect, useState } from "react";
import AdvertisementOne from "../HomePage/AdvertisementOne/AdvertisementOne";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Data from "../Data";
import "./Products.css";

const Products = () => {
  const [product, setProductData] = useState([]);
  const [pData, setPData] = useState([]);
  useEffect(() => {
    setPData(product?.products);
    // console.log(product?.products);
  }, [product])
  

  useEffect(() => {
    //api call

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(setProductData);
  }, []);
  // console.log(product?.products?.map(x=>x.category));
  const handleCategory = (category)=> {
    console.log(product?.products?.filter(p=>p.category === category))
    setPData(product?.products?.filter(p=>{ return p.category === category}));
  }

  return (
    <>
      <div className="products-content">
        <div className="products">
          <Carousel autoPlay={true}>
            {Data.map((info, index) => (
              <div className="header-data">
              <h5 style={{textAlign:"center"}} className="title">{info.Title}</h5>
                <div className="images" onClick={()=>handleCategory(info.category)}>

                  <div key={index} className="delivery-item-cover">

                    <img src={info.Image} alt="" className="delivery-item-image" />
                    <div className="delivery-item">{info.Name}</div>

                  </div>
                  <div key={index} className="delivery-item-cover">
                    <img src={info.Image2} alt="" className="delivery-item-image" />

                    <div className="delivery-item">{info.Name1}</div>
                  </div>
                  <div key={index} className="delivery-item-cover">
                    <img src={info.Image3} alt="" className="delivery-item-image" />
                    <div className="delivery-item">{info.Name2}</div>
                  </div>
                  <div key={index} className="delivery-item-cover">
                    <img src={info.Image4} alt="" className="delivery-item-image" />
                    <div className="delivery-item">{info.Name3}</div>
                  </div>
                </div>
                {/* <div className="data-name">
                <div  className="delivery-item-title">{info.Name}</div>
                <div className="delivery-item-title">{info.Name1}</div>
                <div className="delivery-item-title">{info.Name2}</div>
                <div className="delivery-item-title">{info.Name3}</div>
              </div> */}
              </div>
            ))}
          </Carousel>

          <div className="services">
            <h3>Check Now!</h3>
            <h1>Our Feature Products</h1>

            <div
              style={{
                marginTop: "0px",
                display: "flex",
                flexWrap: "wrap",
                position: "relative",
                justifyContent: "center",
              }}
            >
              {pData && pData.length > 0 &&
                pData.map((value, index) => (
                  <Link to={"/DisplayContent/" + value?.category} key={index}>
                    <AdvertisementOne definition={value} />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
