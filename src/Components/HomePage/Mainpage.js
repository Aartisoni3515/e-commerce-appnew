import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Service from "../Services/Service";
import AdvertisementFour from "./AdvertisementFour/AdvertisementFour";
import AdvertisementOne from "./AdvertisementOne/AdvertisementOne";
import "./Mainpage.css";

const Mainpage = () => {
  const [product, setProductData] = useState([]);

  useEffect(() => {
    //api call

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(setProductData);
  }, []);
  console.log(product?.products, "products");

  return (
    <>
      <div className="mainpage">
        <div className="img-header">
          <div className="carousel-img">
            <Carousel autoPlay={true}>
              <div className="car_1">
                <img
                  src="https://cdn.create.vista.com/api/media/medium/298321280/stock-photo-happy-girl-shopping-bags-isolated?token="
                  alt=""
                />
                <h1 className="heading">
                  Get up to 30% off <br />
                  New Arrivals
                </h1>
                <button>Shop now</button>
              </div>

              <div>
                <img
                  src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81bcMwakpmL._SX3000_.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71vdTR50hFL._SX3000_.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51ovs76vmtL._SX3000_.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61O759bS39L._SX3000_.jpg"
                  alt=""
                />
              </div>
            </Carousel>
          </div>
          <div className="services">
            <h3>Check Now!</h3>
            <h1>Our Feature Services</h1>

            <div
              style={{
                marginTop: "0px",
                display: "flex",
                flexWrap: "wrap",
                position: "relative",
                justifyContent: "center",
              }}
            >
              {product?.products?.length > 0 &&
                product?.products?.map((value, index) => (
                  <Link to="/DisplayContent? category= home" key={index}>
                    <AdvertisementOne definition={value} />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Service />
      <Footer />
    </>
  );
};

export default Mainpage;
