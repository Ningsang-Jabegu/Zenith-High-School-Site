import React from "react";
import { Link } from "react-router-dom";

 export default function NavbarDropDownItem({ iconClass, title, description, href }) {
  return (
    <li>
      <Link to={href} className="link dropdown-item">
        <i className={iconClass}></i>
        <span>
          <span className="drop-down-item-title">{title}</span>
          <span className="drop-down-desc">{description}</span>
        </span>
      </Link>
    </li>
  );
}
