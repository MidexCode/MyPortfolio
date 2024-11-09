import React, { useState } from "react";
import underline from "../../assets/nav_underline.svg";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <h2>Midex</h2>
        </div>

        <div className="nav-items">
          <ul className="nav-menu">
            <li>
              <p>Home</p>{" "}
              {menu === "home" ? <img src={underline} alt="" /> : <></>}
            </li>
            <li>
              <p>About Me</p>
              {menu === "about" ? <img src={underline} alt="" /> : <></>}
            </li>
            <li>
              <p>Services</p>
              {menu === "service" ? <img src={underline} alt="" /> : <></>}
            </li>
            <li>
              <p>Portfolio</p>
              {menu === "portfolio" ? <img src={underline} alt="" /> : <></>}
            </li>
            <li>
              <p>Contact</p>
              {menu === "contact" ? <img src={underline} alt="" /> : <></>}
            </li>
          </ul>
        </div>

        <div className="nav-button">Connect With Me</div>
      </div>
    </>
  );
};
