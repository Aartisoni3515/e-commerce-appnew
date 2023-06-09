import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../SignUp.css";
import Navbar from "../../Navbar/Navbar";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignIn = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
      }),
    })
      .then((res) => res.json())
      .then(console.log);
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="container">
          <div className="image">
            <img src="contact.svg" alt="" />
          </div>
          <div className="form-area">
            <h2>Sign In</h2>
            <div className="form">
              <input
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={() => handleSignIn()} type="submit">
                SignIn
              </button>
            </div>
            <div className="social-icons"></div>
            <p>
              Create Account{" "}
              <Link style={{ textDecoration: "underline" }} to="/signup">
                {" "}
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
