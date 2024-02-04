import React from 'react';
import NavLeft from './NavLeft';
import NavRight from './NavRight';

export default function Navbar() {
    return(
        <nav className="nav-container">
            <NavLeft />
            <NavRight />
        </nav>
    )
}