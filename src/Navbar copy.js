import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/Tour" className="logo">
          Travels
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
