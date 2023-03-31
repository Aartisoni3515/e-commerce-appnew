import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import "./Services.css";

const Service = () => {
  return (
    <>

      <div className="service-container">
      <div className="service-content">
        <h4>Check Now!</h4>
        <h1>Our Services</h1>
        <div className="grid-three-column">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>

          <div className="services-2">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon" />
                <h3>Non-contact Shipping</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Money-back Guaranteed</h3>
              </div>
            </div>
          </div>

          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
        </div>
        <hr style={{width:"80%" , margin:"auto"}} />

{/* ...................................................brand-section......................................................... */}
        <div className="brand-section">
          <div className="brand-container">
            <h3>Trusted By 1000+ Companies</h3>
            <div className="brand-section-slider">
              {/* my 1st img  */}
              <div className="slide">
                <img
                  src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
                  alt="trusted-brands"
                />
              </div>
              <div className="slide">
                <img
                  src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
                  alt="trusted-brands"
                />
              </div>
              <div className="slide">
                <img
                  src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
                  alt="trusted-brands"
                />
              </div>
              <div className="slide">
                <img
                  src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
                  alt="trusted-brands"
                />
              </div>
              <div className="slide">
                <img
                  src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
                  alt="trusted-brands"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
