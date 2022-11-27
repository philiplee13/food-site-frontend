import React from "react";
import SlidingImages from "./SlidingImage";
import header from "../images/menuLogoEdited.png"

function Header() {
    return (
        <div className="header">
            <h1>Dragon Lite Deli</h1>
            <SlidingImages />
            <img src={header} alt="menuLogo" />
            <h3>Chinese Food To-go</h3>
            <h4>Catering for all occasions!</h4>
            <h6>Call us: 209-334-3457</h6>
            <h6>Business Hours:</h6>
            <h6>Monday: Closed</h6>
            <h6>Tuesday - Friday: 11AM - 9PM</h6>
            <h6>Saturday: 12PM - 9PM</h6>
            <h6>Sunday: 2PM - 9PM</h6>
        </div>
    );
}

export default Header;
