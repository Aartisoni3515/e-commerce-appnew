import React, { useState } from "react";
import "../SignUp.css";
import SignIn from "../sign-in/SignIn";
import SignUp from "../sign-up/SignUp";
import logo from "../../../Images/logo-2.png"


const Container = () => {
  const [welcome, setWelcome] = useState(false);

  const setBannerClass = () => {
    const classArr = ["banner-side cfb"];
    if (welcome) classArr.push("send-right");
    return classArr.join(" ");
  };

  const setFormClass = () => {
    const classArr = ["form-side cfb"];
    if (welcome) classArr.push("send-left");
    return classArr.join(" ");
  };

  return (
  <div className="App cfb">
    <div className="Container cfb">
      <div className={setBannerClass()}>
      <img src={logo} alt="" />
        {welcome ? <h2>Hello, New Friend!</h2> : <h2>Welcome Back</h2>}

        <button onClick={() => setWelcome(!welcome)}>
          {welcome ? "Sign In" : "Create Account"}
        </button>
      </div>

      <div className={setFormClass()}>{welcome ? <SignUp /> : <SignIn />}</div>
    </div>
    </div>
  );
};

export default Container;
