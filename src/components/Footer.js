import React from "react";
import '../components/css/Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-container">
                    {/* About */}
                    <div className="footer-about">
                        <div className="footer-links">
                            <a className="footer-link" href="#">About</a>
                            <a className="footer-link" href="#">Partners</a>
                            <a className="footer-link" href="#">Visions</a>
                            <a className="footer-link" href="#">Contributions</a>
                        </div>
                    </div>
                    {/* Social Media */}
                    <div className="footer-social">
                        <div className="footer-social-links">
                            <a href="https://www.facebook.com" className="social-link"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com" className="social-link"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com" className="social-link"><i className="fab fa-youtube"></i></a>
                            <a href="https://www.x.com" className="social-link"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                    {/* License */}
                    <div className="footer-license">
                        <p><i className="far fa-copyright"></i> 2024 Your Company, Inc. All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
