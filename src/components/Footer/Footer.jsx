import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="para">
                    <p>© 2025 Grill House - All Rights Reserved.</p>
                </div>
                <div className="icon">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaYoutube />
                    <FaTwitterSquare />
                </div>
            </footer>
        </>
    );
};

export default Footer;
