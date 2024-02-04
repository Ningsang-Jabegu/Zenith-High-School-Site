import React, { useState, useEffect } from "react";
import NavbarPrimaryList from "./NavbarPrimaryList";
import NavbarSecondaryList from "./NavbarSecondaryList";
import { Link } from "react-router-dom";

export default function NavLeft() {
  const [showNav, setShowNav] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuClicked, setMenuClicked] = useState(false);

  useEffect(() => {
    function handleResize() {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
      setShowNav(newWindowWidth > 1000);
    }

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  useEffect(() => {
    if(windowWidth<=1001){
      setShowNav(false);
      setMenuClicked(false);
    }
  }, [windowWidth]);
  return (
    <div className="nav-left nav-child">
      <div className="logo-area rounded shadow-soft border border-light">
        <Link to="/" className="link">
          <figure className="nav-logo-box">
            <img
              src="/Images/Logo/zenith-school.PNG"
              className="  nav-logo"
              alt="School's logo"
            />
            <figcaption>
              <span className="school-slogan">Unity, Love and Service</span>
              <span className="school-name">Zenith English School</span>
              <span className="school-address">Brihaspati Marga, Dharan, Nepal</span>
            </figcaption>
          </figure>
        </Link>
        <i
          className="nav-show-bar fa-solid fa-bars border border-light"
          tabIndex="0"
          onClick={() => {
            if(windowWidth <= 1001) {
              setShowNav(!showNav);
            setMenuClicked(!menuClicked);
            }
          }}
        ></i>
      </div>
      {showNav && (
        <div className="nav-item-box ">
          <NavbarSecondaryList />
          <NavbarPrimaryList menuStatus={menuClicked}/>
        </div>
      )}
    </div>
  );
}
