import React from "react";
import styled from "styled-components";
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

// const Wrapper = styled.section`
//   .iSIFGq {
//     margin: 0;
//   }

//   .contact-short {
//     max-width: 60vw;
//     margin: auto;
//     padding: 5rem 10rem;
//     background-color: ${({ theme }) => theme.colors.bg};
//     border-radius: 1rem;
//     box-shadow: ${({ theme }) => theme.colors.shadowSupport};
//     transform: translateY(50%);

//     .grid div:last-child {
//       justify-self: end;
//       align-self: center;
//     }
//   }

//   footer {
//     padding: 14rem 0 9rem 0;
//     background-color: ${({ theme }) => theme.colors.footer_bg};
//     h3 {
//       color: ${({ theme }) => theme.colors.hr};
//       margin-bottom: 2.4rem;
//     }
//     p {
//       color: ${({ theme }) => theme.colors.white};
//     }
//     .footer-social--icons {
//       display: flex;
//       gap: 2rem;

//       div {
//         padding: 1rem;
//         border-radius: 50%;
//         border: 2px solid ${({ theme }) => theme.colors.white};

//         .icons {
//           color: ${({ theme }) => theme.colors.white};
//           font-size: 2.4rem;
//           position: relative;
//           cursor: pointer;
//         }
//       }
//     }
//   }

//   .footer-bottom--section {
//     padding-top: 9rem;

//     hr {
//       margin-bottom: 2rem;
//       color: ${({ theme }) => theme.colors.hr};
//       height: 0.1px;
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .contact-short {
//       max-width: 80vw;
//       margin: 4.8rem auto;
//       transform: translateY(0%);
//       text-align: center;

//       .grid div:last-child {
//         justify-self: center;
//       }
//     }

//     footer {
//       padding: 9rem 0 9rem 0;
//     }

//     .footer-bottom--section {
//       padding-top: 4.8rem;
//     }
//   }
// `;
