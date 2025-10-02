import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import tourImage from "./tour.jpeg";
import { useTranslation } from "./hooks/useTranslation";
import LanguageSelector from "./components/LanguageSelector";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

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
          <img src={tourImage} alt={t.companyName} style={{ height: "48px", width: "48px", objectFit: "cover", marginRight: "10px", verticalAlign: "middle" }} />
          <span>{t.companyName}</span>
        </Link>
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <li><Link to="/home" onClick={handleLinkClick}>{t.home}</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>{t.about}</Link></li>
          {/* <li><Link to="/tours" onClick={handleLinkClick}>{t.tours}</Link></li> */}
          {/* <li><Link to="/deals" onClick={handleLinkClick}>{t.deals}</Link></li> */}
          <li><Link to="/testimonials" onClick={handleLinkClick}>{t.testimonials}</Link></li>
          <li><Link to="/blogs" onClick={handleLinkClick}>{t.blog}</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>{t.contact}</Link></li>
        </ul>
        <div className="nav-right">
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
