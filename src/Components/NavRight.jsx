import React from "react";
import { Link } from "react-router-dom";

export default function NavRight() {
    return(
        <div className="nav-right nav-child">
                <Link to="/register" className="link nav-right-btn rounded btn btn-primary text-secondary">
                    <i className="fa-solid fa-paper-plane"></i> &nbsp;Register to ZES
                </Link>
                <Link to="/login" className="link nav-right-btn rounded btn btn-primary text-secondary">
                    <i className="fa-solid fa-book"></i> &nbsp;Log In
                </Link>
        </div>
    )
}