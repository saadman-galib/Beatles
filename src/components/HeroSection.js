import React from "react";
import "./HeroSection.scss";
function HeroSection() {
    return (
        <div className="hero-section-container" id="Hero">
            <div className="hero-section">
                <div className="hero-section-items">
                    <div className="hero-section-text">
                        <h3>Hi! We Are</h3>
                        <h2>Creative Designer</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod <br></br>tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim{" "}
                            <br></br>veniam, quis nostrud exercitation
                        </p>
                    </div>
                    <div className="button-container">
                        <button className="button-blue hero-button">
                            HIRE US
                        </button>
                        <button className="button-white hero-button">
                            CONTACT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
