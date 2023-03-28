import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./About";
// import Products from "./Products";
// import Contact from "./Contact";
// import Cart from "./Cart";
// import SingleProduct from "./SingleProduct";
// import ErrorPage from "./ErrorPage";
// import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Mainpage from "./Components/HomePage/Mainpage";
import Container from "./Components/SignUpPage/container/Container";
import DisplayContent from "./Components/DisplayContent/DisplayContent";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import CheckOut from "./Components/CheckOut/Checkout";
import CartContextProvider from "./Components/CartContext"
import Service from "./Components/Services/Service";

const App = () => {
  return (
    <Router>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/container" element={<Container />} />
          <Route path="/DisplayContent" element={<DisplayContent />} />
          <Route path="/PlaceOrder/:id" element={<PlaceOrder />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Services" element={<Service />} />

        </Routes>
      </CartContextProvider>
    </Router>
  );
};

export default App;
