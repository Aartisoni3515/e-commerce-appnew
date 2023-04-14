import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";
import logo from "../../Images/logo-2.png";
import "./Navbar.css";
import Route from "../Route.json"

function Navbar({ orderPlaced, setOrderPLaced }) {
  const [IsMobile, setIsMobile] = useState(false);

  let numLength = () => {
    return JSON.parse(window.localStorage.getItem("cartItems"))?.length;
  };

  useEffect(() => {
    numLength();
    if (orderPlaced) {
      setOrderPLaced("");
    }
  }, [orderPlaced]);
  return (
    <>
      <nav className="d-flex justify-content-between align-content-center mh-0 position-relative">
        <div className="">
          <img  style={{height:"100px", width:"60%", paddingLeft:"50px"}} src={logo} alt="" />
        </div>

        <ul
          className={IsMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
            <div className="d-flex justify-content-between">
          {Route.map((info, index) => (
            <div className="mt-4 " key={index}>
              <Link className="text-decoration-none pt-100 text-dark "  to={info.routes}>
                <li className=" mx-5 h5" >{info.list}</li>
              </Link>
            </div>
          ))}
            </div>
          {/* <Link to="/" className="Home">
            <li>Home</li>
          </Link>

          <Link to="/Products" className="Contact">
            <li>Products</li>
          </Link>

          <Link to="/Contact" className="Contact">
            <li>Contact</li>
          </Link> */}
          <Link to="/signup" className="About">
            <li>
             
              <FaUserCircle />
            </li>
          </Link>

          <Link to="/Cart" className="cart">
            <li>
              <FiShoppingCart />
              {numLength()}
            </li>
          </Link>
        </ul>

        <li className="cart__style">
          <span>{numLength()}</span>

          <FiShoppingCart />
        </li>

        <button
          className="mobile-menu-icon "
          onClick={() => setIsMobile(!IsMobile)}
        >
          {IsMobile ? <CgClose /> : <CgMenu />}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
