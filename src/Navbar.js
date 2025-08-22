import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import tourImage from "./tour.jpeg";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    // Scroll to top when navigating to another page
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/Tour" className="logo">
          <img src={tourImage} alt="Sri Yatra Travels" style={{ height: "48px", width: "48px", objectFit: "cover", marginRight: "10px", verticalAlign: "middle" }} />
          <span>Sri Yatra Travels</span>
        </Link>
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <li><Link to="/home" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
          {/* <li><Link to="/tours" onClick={handleLinkClick}>Tours</Link></li> */}
          {/* <li><Link to="/deals" onClick={handleLinkClick}>Deals</Link></li> */}
          <li><Link to="/testimonials" onClick={handleLinkClick}>Testimonials</Link></li>
          <li><Link to="/blogs" onClick={handleLinkClick}>Blog</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
