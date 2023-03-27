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
import Mainpage from "./Components/HomePage/Mainpage"
import Container from "./Components/SignUpPage/container/Container"
import DisplayContent from "./Components/DisplayContent/DisplayContent"

const App = () => {
  

  return (
      <Router>
        {/* <GlobalStyle /> */}
        {/* <Header /> */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/container" element={<Container/>} />
          <Route path="/DisplayContent" element={<DisplayContent />} />


          
          {/* <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
  );
};

export default App;
