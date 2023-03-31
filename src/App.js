import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Mainpage from "./Components/HomePage/Mainpage";
import DisplayContent from "./Components/DisplayContent/DisplayContent";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import CheckOut from "./Components/CheckOut/Checkout";
import Service from "./Components/Services/Service";
import Contact from "./Components/Contact/Contact";
import Products from "./Components/Products/Products";
import SignUp from "./Components/SignUpPage/sign-up/SignUp";
import SignIn from "./Components/SignUpPage/sign-in/SignIn";
import Cart from "./Cart/Cart";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Mainpage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="Navbar" element={<Navbar />} /> */}

          <Route path="/DisplayContent/:id" element={<DisplayContent />} />
          <Route path="/DisplayContent/PlaceOrder/:id" element={<PlaceOrder />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Services" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />




        </Routes>
        <Footer/>
    </Router>
  );
};

export default App;
