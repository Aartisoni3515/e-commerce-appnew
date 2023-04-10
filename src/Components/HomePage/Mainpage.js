import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Service from "../Services/Service";
import AdvertisementOne from "./AdvertisementOne/AdvertisementOne";
import "./Mainpage.css";
import Navbar from "../Navbar/Navbar";

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
      <Navbar />
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
                <p></p>
                <Link to="/products">
                  {" "}
                  <button>Shop now</button>{" "}
                </Link>
              </div>

              <div className="car_1">
                <img
                  src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-746.jpg"
                  alt=""
                />
                <h1 className="heading">
                  Get up to 30% off on Shoes <br />
                  New Arrivals
                </h1>
                <Link to="/products">
                  {" "}
                  <button>Shop now</button>{" "}
                </Link>
              </div>
              <div className="car_1">
                <img
                  src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-775.jpg"
                  alt=""
                />
                <h1 className="heading">
                  Get up to 30% off on Clothes <br />
                  New Arrivals
                </h1>
                <Link to="/products">
                  {" "}
                  <button>Shop now</button>{" "}
                </Link>
              </div>
              <div className="car_1">
                <img
                  src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-781.jpg"
                  alt=""
                />
                <h1 className="heading">
                  Get up to 30% off on glasses <br />
                  New Arrivals
                </h1>
                <Link to="/products">
                  {" "}
                  <button>Shop now</button>{" "}
                </Link>
              </div>
              <div className="car_1">
                <img
                  src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-777.jpg"
                  alt=""
                />
                <div className="left-head">
                  <h1 style={{ textAlign: "right" }} className="heading-right">
                    Get up to 30% off on Laptops and Mobiles New Arrivals
                  </h1>
                  <button className="s-btn">Shop now</button>
                </div>
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
                  <Link to={"/DisplayContent/" + value?.category} key={index}>
                    <AdvertisementOne definition={value} />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Service />
      {/* <Footer /> */}
    </>
  );
};

export default Mainpage;
