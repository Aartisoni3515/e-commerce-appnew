import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";

import logo from "../../Images/logo-2.png";
import "./Navbar.css";

function Navbar(props) {
  const [IsMobile, setIsMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <ul
          className={IsMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <Link to="/" className="Home">
            <li>Home</li>
          </Link>

          <Link to="/Products" className="Contact">
            <li>Products</li>
          </Link>

          <Link to="/Contact" className="Contact">
            <li>Contact</li>
          </Link>
          <Link to="/signup" className="About">
            <li>
              {" "}
              <FaUserCircle />
            </li>
          </Link>

          <Link to="/Cart" className="cart">
            <li>
              <FiShoppingCart />
              {JSON.parse(window.localStorage.getItem("cartItems"))?.length}
            </li>
          </Link>
        </ul>
        <li className="cart__style">
          <span style={{ paddingRight: "94px" }}>
            {JSON.parse(window.localStorage.getItem("cartItems"))?.length}
          </span>

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
