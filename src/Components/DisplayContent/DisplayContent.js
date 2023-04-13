import React from "react";
import RightSidePanel from "./RightSide/RightSidePanel";
import "./RightSide/RightSide.css"
import Navbar from "../Navbar/Navbar";

const DisplayContent = () => {
  return (
    <>
     <Navbar />
      <div className="DisplayContent">
        <div>
        </div>
        <div>
          <RightSidePanel />
        </div>
      </div>
    </>
  );
};

export default DisplayContent;
