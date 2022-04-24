import React, { useState } from "react";
import "./styles.css";
import { GrClose } from "react-icons/gr";

const Slider = ({ setMenu, menu }) => {
  return (
    <div className={menu ? "slider active" : "slider"}>
      <div className="slider-header">
        <GrClose onClick={() => setMenu(false)} className="close-icon" />
      </div>
      <div className="slider-components">
        <a href="#">Home</a>
        <a href="#">Explore medical bills</a>
        <a href="#">My account</a>
      </div>
    </div>
  );
};

export default Slider;
