import React from "react";
import logo from "../assets/1.webp"; // Adjust the path based on your folder structure

function Logo({ width = "100px" }) {
  return (
    <div>
      <img
        src={logo}
        alt="Logo"
        style={{ width: width }}
        className="rounded-lg"
      />
      {/* Logo */}
    </div>
  );
}

export default Logo;
