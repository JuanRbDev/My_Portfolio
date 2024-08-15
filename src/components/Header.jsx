import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="header">
            <nav className="nav-menu">
                <div className="nav-container">
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About Me</Link></li>
                        <li><Link to="/">Skills</Link></li>
                        <li><Link to="/">Projects</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
