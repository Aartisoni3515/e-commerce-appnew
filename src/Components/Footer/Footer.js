import React from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <>
        <section className="contact-short">
          <div className="grid-two">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <button className="hireme-btn">
                <NavLink to="/"> Get Started </NavLink>
              </button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="container-grid">
            <div className="footer-about">
              <h3>Shopping.co</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form className="footer-inputs" action="#">
                <input
                  className="input-1"
                  type="email"
                  name="email"
                  placeholder="YOUR E-MAIL"
                />

                <input className="input-2" type="submit" value="subscribe" />
              </form>
            </div>
            <div className="social">
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social-icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                    <FaYoutube className="icons" />
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 12345678978</h3>
            </div>
          </div>
          </div>

          <div className="footer-bottom-section">
            <hr style={{ opacity: "0.2" }} />
            <div className="grid-two ">
              <p>
                @{new Date().getFullYear()} shopping.com All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </>
    </>
  );
};

export default Footer;

