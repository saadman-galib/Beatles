import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="navbar-container">
            <div className="navbar-items">
                <div className="logo">
                    <img src="./images/Logo.png" alt="logo"></img>
                    <div className="menu-icon" onClick={handleClick}>
                    <i
                        className={
                            click ? "fas fa-times times" : "fas fa-bars bars"
                        }
                    ></i>
                    {/* <i class="fas fa-bars bars"></i>
                    <i class="fas fa-times times"></i> */}
                </div>
                </div>
                <div
                    className={
                        click
                            ? "nav-items-container-mobile"
                            : "nav-items-container"
                    }
                >
                    <ul>
                        <li>
                            <Link to={<HeroSection />} className="nav-item">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-item">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-item">
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-item">
                                Testimonial
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-item">
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-item">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
