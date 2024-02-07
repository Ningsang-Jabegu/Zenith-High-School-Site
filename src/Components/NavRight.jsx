import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarSecondaryList from "./NavbarSecondaryList";
import NavbarPrimaryList from "./NavbarPrimaryList";

export default function NavRight() {
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
        if (windowWidth <= 1001) {
            setShowNav(false);
            setMenuClicked(false);
        }
    }, [windowWidth]);

    return (
        <>

            <div className="nav-right nav-child">
                <i
                    className="nav-show-bar fa-solid fa-bars border border-light"
                    tabIndex="0"
                    onClick={() => {
                        if (windowWidth <= 1001) {
                            setShowNav(!showNav);
                            setMenuClicked(!menuClicked);
                        }
                    }}
                ></i>
                {showNav && (
                    <div className="nav-item-box ">
                        <NavbarSecondaryList />
                        <NavbarPrimaryList menuStatus={menuClicked} />
                    </div>
                )}
                <div className="nav-right-btn-container">
                    <Link to="/register" className="link nav-right-btn rounded btn btn-primary text-secondary">
                        <i className="fa-solid fa-paper-plane"></i> &nbsp;Register to ZES
                    </Link>
                    <Link to="/login" className="link nav-right-btn rounded btn btn-primary text-secondary">
                        <i className="fa-solid fa-book"></i> &nbsp;Log In
                    </Link>
                </div>
            </div>
        </>

    )
}