import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <h2>Midex</h2>
        </div>

        <div className="nav-items">
          <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="nav-button">Connect With Me</div>
      </div>
    </>
  );
};
