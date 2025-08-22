import React from "react";
import { useNavigate } from "react-router-dom";
import "./TourCard.css";

const TourCard = ({ title, country, price, duration, tags, image }) => {
  const navigate = useNavigate();

  const handleMoreInfoClick = () => {
    if (title === "5-Days Budget Pack (Highlights of Sri Lanka)") {
      navigate("/5daytrip");
    } else 
    if (title === "3-Day Colombo City Experience") {
      navigate("/hello");
    } else if (title === "Family Trip to Sri Lanka") {
      navigate("/bye");
    } else {
      alert("No page defined for this tour.");
    }
  };

  return (
    <div className="tour-card">
      <h3>{title}</h3>
      <div className="badge">{country}</div>
      <div className="stars">⭐⭐⭐⭐⭐</div>
      <img src={image} alt={title} className="tour-image" />
      <div className="duration">
        <span className="duration-badge">{duration} Days</span>
      </div>
      <div className="icons">🏨 ✈ 🚗 🍽</div>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <p className="price">From <span>US ${price}</span> Per Person</p>
      <button className="info-btn" onClick={handleMoreInfoClick}>
        More Information ➜
      </button>
    </div>
  );
};

export default TourCard;
