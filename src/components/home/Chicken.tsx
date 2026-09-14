import React from "react";
import "../styles/chick.css"; // Import the CSS file

// Import the GIF
import chickGif from "../constant/chick.gif";

const Chicken = () => {
  return (
    <div className="container">
      <img src={chickGif} alt="Chick Animation" className="chick" />
    </div>
  );
};

export default Chicken;
