import React from "react";
import "./Footer.css"; // Import the CSS file
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>Olanka Travels</h3>
          <p>
            We are a dedicated travel destination management company in Sri Lanka,
            offering custom tours & holiday packages.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Tours</a></li>
            <li><a href="#">Deals</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@olankatravels.com</p>
          <p>Phone: +61 483 909 556</p>
          <p>Location: Sri Lanka | Australia | India</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Payment Options */}
        <div className="footer-section">
          <h3>We Accept</h3>
          <div className="payment-icons">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaCcAmex />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Olanka Travels | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
