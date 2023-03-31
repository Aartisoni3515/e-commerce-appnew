import React from "react";
import LeftSidePanel from "./LeftSide/LeftSidePanel";
import RightSidePanel from "./RightSide/RightSidePanel";
import "./RightSide/RightSide.css"
import Navbar from "../Navbar/Navbar";

const DisplayContent = () => {
  return (
    <>
     <Navbar />
      <div className="DisplayContent">
        <div>
          {/* <LeftSidePanel /> */}
        </div>
        <div>
          <RightSidePanel />
        </div>
      </div>
    </>
  );
};

export default DisplayContent;
