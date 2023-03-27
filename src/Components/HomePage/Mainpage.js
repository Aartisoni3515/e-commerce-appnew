import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import AdvertisementFour from "./AdvertisementFour/AdvertisementFour";
import AdvertisementOne from "./AdvertisementOne/AdvertisementOne";
import "./Mainpage.css";


const Mainpage = () => {
  let list = [
    {
      type: "one",
      header: "Up to 40% off | Home & Kitchen",
      definition: [
        "https://ik.imagekit.io/amazon1234/box1_3_RvMp5Dkcd.jpg?updatedAt=1627118732916",
        "https://ik.imagekit.io/amazon1234/box1_3_RvMp5Dkcd.jpg?updatedAt=1627118732916",
      ],
    },
    {
      type: "four",
      header: "Shop by Category",
      definition: [
        "https://ik.imagekit.io/amazon1234/box3_2_UjLOl0OQn.jpg?updatedAt=1627118737037",
        "https://ik.imagekit.io/amazon1234/box3_3_BNpkVUIf4.jpg?updatedAt=1627118735915",
        "https://ik.imagekit.io/amazon1234/box3_4_DQnzfSDxh.jpg?updatedAt=1627118740952",
        "https://ik.imagekit.io/amazon1234/box3_2_UjLOl0OQn.jpg?updatedAt=1627118737037",
      ],
    },
    {
      type: "one",
      header: "Up to 70% off | Electronics clearance store",
      definition: [
        "https://ik.imagekit.io/amazon1234/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204__nBkAcb2wW.jpg?updatedAt=1627731880089",
      ],
    },
    {
      type: "one",
      header: "Up to 70% off | Electronics clearance store",
      definition: [
        "https://ik.imagekit.io/amazon1234/box2_4_b005M-CUn.jpg?updatedAt=1627118750081",
      ],
    },
    {
      type: "one",
      header: "Up to 70% off | Electronics clearance store",
      definition: [
        "https://ik.imagekit.io/amazon1234/box4_1_heFiuUTQ5.jpg?updatedAt=1627118751289",
      ],
    },
    {
      type: "four",
      header: "Up to 30% off on Cooking essentials | Amazon Fresh",
      definition: [
        "https://ik.imagekit.io/amazon1234/box4_2_j7cfsH163.jpg?updatedAt=1627118749199",
        "https://ik.imagekit.io/amazon1234/tab9_VVlk1J1_x.jpg?updatedAt=1627118745782",
        "https://ik.imagekit.io/amazon1234/box2_1_Hdj80YRHw.jpg?updatedAt=1627118747528",
        "https://ik.imagekit.io/amazon1234/box2_3_1Hme7yOEM.jpg?updatedAt=1627118742182",
      ],
    },
    {
      type: "four",
      header: "Inspired by your Wish List",
      definition: [
        "https://ik.imagekit.io/amazon1234/tab8_oJnWNwvIX.jpg?updatedAt=1627118746586",
        "https://ik.imagekit.io/amazon1234/box2_3_1Hme7yOEM.jpg?updatedAt=1627118742182",
        "https://ik.imagekit.io/amazon1234/box1_4_yVnP7knQNO.jpg?updatedAt=1627118740078",
        "https://ik.imagekit.io/amazon1234/tab10_dcLpRR5LD.jpg?updatedAt=1627118739258",
      ],
    },
    {
      type: "one",
      header: "Festive latest launches",
      definition: [
        "https://ik.imagekit.io/amazon1234/box1_3_RvMp5Dkcd.jpg?updatedAt=1627118732916",
      ],
    },
  ];

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
          <div className="services" >
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
            {list.map((value, index) =>
               value.type === "one" ? (
                <Link to="/DisplayContent" key={index}>
                  <AdvertisementOne  definition={value} />
                </Link>
              ) : (
                <Link to="/DisplayContent" key={index} >
                  <AdvertisementFour definition={value} />
                </Link>
              )
            )}
          </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Mainpage;
