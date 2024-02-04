import React, { useState } from "react";
import NavbarDropBox1 from "./NavbarDropBox1";
import NavbarDropBox2 from "./NavbarDropBox2";
import NavbarDropBox3 from "./NavbarDropBox3";
import NavbarDropBox4 from "./NavbarDropBox4";
import NavbarDropBox5 from "./NavbarDropBox5";
import { Link } from "react-router-dom";
export default function NavbarPrimaryList(menuStatus) {
  const [showDropdown, setShowDropdown] = useState(true);
  // const [selectedItem, setSelectedItem] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const menuItems = [
    { title: "About Us", dropBoxComponent: <NavbarDropBox1 />, link:"/aboutus" },
    { title: "Academics", dropBoxComponent: <NavbarDropBox2 />, link:"/academics" },
    { title: "Services", dropBoxComponent: <NavbarDropBox3 />, link:"/services" },
    { title: "Community", dropBoxComponent: <NavbarDropBox4 />, link:"/community" },
    { title: "Bulletins", dropBoxComponent: <NavbarDropBox5 />, link:"/bulletins" },
    // Add more menu items as needed
  ];
  function NavbarListItem({ title, dropBoxComponent, link,menuOnOff,showDropdown }) {
    if(menuOnOff && windowWidth<=1001) {
      return(
        <li>
          <Link to={link} className="link">
            {title} &nbsp;<i className="fa-solid fa-angle-down"></i>
          </Link>
          {dropBoxComponent}
        </li>
      )
    } else {
      return (
        <li>
          <Link to={link} className="link">
            {title} &nbsp;<i className="fa-solid fa-angle-down"></i>
          </Link>
          {showDropdown && dropBoxComponent}
        </li>
      );
    }
    
  }
  
  return (
    <ul>
      {windowWidth>=1001 && menuItems.map((menuItem, index) => (
        <NavbarListItem
          key={index}
          title={menuItem.title}
          dropBoxComponent={menuItem.dropBoxComponent}
          link={menuItem.link}
          showDropdown={showDropdown}
        />
      ))}
      {windowWidth<1001 && menuItems.map((menuItem, index) => (
        <NavbarListItem
          key={index}
          title={menuItem.title}
          dropBoxComponent={menuItem.dropBoxComponent}
          link={menuItem.link}
          menuOnOff = {menuStatus}
          showDropdown={showDropdown}
        />
      ))}
    </ul>
  );
}
