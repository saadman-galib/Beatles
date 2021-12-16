import React from "react";
import "./About.scss";

function About() {
    return (
        <div className="about-section-container">
            <div className="about-section">
                <div className="section-title">
                    <h2>About Us</h2>
                    <img src="/images/Shape 1 copy 3.png" alt="" />
                </div>
                <div className="about-items">
                    <div className="about-img-container">
                        <img src="./images/person-03.png" alt="" srcset="" />
                    </div>
                    <div className="about-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor ididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officiaeserunt mollit anim id est
                            laborum. Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem accusantium doloremque
                            laudantium.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
