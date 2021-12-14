import React from "react";
import "./Welcome.scss";

function Welcome() {
    return (
        <div className="welcome-container">
            <div className="welcome-items">
                <div className="left-part">
                    <p>Welcome to Beatles</p>
                </div>
                <div className="right-part">
                    <div className="social-icon-container">
                        <i class="fab fa-facebook-f social-icon"></i>
                        <i class="fab fa-twitter social-icon"></i>
                        <i class="fab fa-linkedin-in social-icon"></i>
                        <i class="fab fa-pinterest-p social-icon"></i>
                        <i class="fab fa-behance social-icon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
