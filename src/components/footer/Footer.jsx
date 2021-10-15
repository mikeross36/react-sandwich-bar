import React from "react"
import logo from "../../images/logo.png"
import { FaEnvelope, FaMapMarkerAlt, FaPhoneSquareAlt } from "react-icons/fa";

export default function Footer(){
    return (
        <footer className="footer" id="footer">
            <div className="footer-wrapper">
                <a href="/" className="footer-logo">
                    <img src={logo} alt="logo" className="logo" />
                </a>
                <p>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Non natus rem praesentium! 
                    Fuga facere totam debitis sed doloremque id 
                    voluptatibus.
                </p>
                <div className="footer-contact" id="footer-contact">
                    <a href="none" className="footer-phone">
                        <FaPhoneSquareAlt style={iconStyle}/>
                        +381 66 22 33 77
                    </a>
                    <a href="none" className="footer-email">
                        <FaEnvelope style={iconStyle}/>
                        someemail@email.com
                    </a>
                    <a href="none" className="footer-address">
                        <FaMapMarkerAlt style={iconStyle}/>
                        Some Address 125 Novi Sad
                    </a>
                </div>
                <div className="footer-links1">
                    <h5>what's new</h5>
                    <a href="/">events</a>
                    <a href="/">solutions</a>
                    <a href="/">articles</a>
                    <a href="/">career</a>
                </div>
                <div className="footer-links2">
                    <h5>website nav</h5>
                    <a href="/">home</a>
                    <a href="#tabs">quotes</a>
                    <a href="#slider">delivery</a>
                    <a href="#footer-contact">contact</a>
                </div>
            </div> 
        </footer>
    )
}

const iconStyle = {
    paddingRight: "1rem",
    fontSize: "2rem"
}