import React from "react";
import { Link } from "react-router-dom";
export default function NavbarSecondaryList() {
    return(
        <div className="nav-item-top-box">
            <ul>
                <li>
                    <Link to="/admission" className="link">Admission</Link>
                </li>
                <li>
                    <Link to="/calender" className="link">Calender</Link>
                </li>
                <li>
                    <Link to="/news" className="link">News & Media</Link>
                </li>
                <li>
                    <Link to="/work" className="link">Work at ZES</Link>
                </li>
                <li>
                    <Link to="/contactus" className="link">Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}