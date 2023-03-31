import React, { useState } from "react";
import "./Contact.css"
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
     <Navbar />
    <div className="main">
        <div className="container">
            <div className="image">
                <img src="contact.svg" alt=""/>
            </div>
            <div className="form-area">
                <h2>Contact US</h2>
                <form action="">
                <input
                  placeholder="Username"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                    <textarea cols="40" rows="6" placeholder="Your Message">
                  </textarea>
                    <button  type="submit">Send Message</button>
                </form>
                <div className="social-icons">
                   
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Contact;
