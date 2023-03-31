import React, { useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import "../SignUp.css";
import Navbar from "../../Navbar/Navbar";
const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleSignUp = () => {
    console.log("signup");
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        email,
        password,
      }),
    })
    .then((res) => {
      res.json();

    });
    


    navigate("/signin");
  };

  // atuny0
  // 9uQFF1Lh

  return (
    <>
    <Navbar/>
      <div className="signup">
        <div className="main">
          <div className="container">
            <div className="image">
              <img src="contact.svg" alt="" />
            </div>
            <div className="form-area">
              <h2>Sign Up</h2>
              <div className="form">
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
                <input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={() => handleSignUp()} type="submit">
                  SignUp
                </button>
              </div>
              <div className="social-icons"></div>
              <p>
                already have an account{" "}
                <Link style={{ textDecoration: "underline" }} to="/signin">
                  {" "}
                  SignIn
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
