import React, { useState } from "react";
import Slider from "../slider/slider";
import "./styles.css";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="navbar">
      <h1>Logo</h1>
      <div className="navlinks">
        <a href="#">Home</a>
        <a href="#">Explore medical bills</a>
        <a href="#">My account</a>
      </div>
      <IoMenuOutline onClick={() => setMenu(true)} className="menu-icon" />
      <Slider setMenu={setMenu} menu={menu} />
    </div>
  );
};

export default Navbar;
