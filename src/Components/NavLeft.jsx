import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavLeft() {
  return (
    <div className="nav-left nav-child">
      <div className="logo-area ">
        <Link to="/" className="link">
          <figure className="nav-logo-box">
            <div>
              <img
                src="/Images/Logo/zenith-school.PNG"
                className="  nav-logo"
                alt="School's logo"
              />
            </div>
            <figcaption>
              <span className="school-slogan">Unity, Love and Service</span>
              <span className="school-name">Zenith English School</span>
              <span className="school-address">Brihaspati Marga, Dharan, Nepal</span>
            </figcaption>
          </figure>
        </Link>
      </div>
    </div>
  );
}
