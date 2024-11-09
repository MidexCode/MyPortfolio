import React, { useState } from "react";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <h2>Midex</h2>
        </div>
        <img src={menu_open} alt="" className="nav-mob-open" />

        <div className="nav-items">
          <ul className="nav-menu">
            <img src={menu_close} alt="" className="nav-mob-close" />
            <li>
              <AnchorLink className="anchor-link" href="#home">
                <p onClick={() => setMenu("home")}>Home</p>{" "}
              </AnchorLink>
              {menu === "home" ? <img src={underline} alt="" /> : <></>}
            </li>
            <li>
              <AnchorLink className="anchor-link" offset={50} href="#about">
                <p onClick={() => setMenu("about")}>About Me</p>
              </AnchorLink>
              {menu === "about" ? <img src={underline} alt="" /> : <></>}
            </li>
            <li>
              <AnchorLink className="anchor-link" offset={50} href="#service">
                <p onClick={() => setMenu("service")}>Services</p>
              </AnchorLink>
              {menu === "service" ? <img src={underline} alt="" /> : <></>}
            </li>
            <li>
              <AnchorLink className="anchor-link" offset={50} href="#portfolio">
                <p onClick={() => setMenu("portfolio")}>Portfolio</p>
              </AnchorLink>
              {menu === "portfolio" ? <img src={underline} alt="" /> : <></>}
            </li>
            <li>
              <AnchorLink className="anchor-link" offset={50} href="#contact">
                <p onClick={() => setMenu("contact")}>Contact</p>
              </AnchorLink>
              {menu === "contact" ? <img src={underline} alt="" /> : <></>}
            </li>
          </ul>
        </div>

        <div className="nav-button">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </>
  );
};
