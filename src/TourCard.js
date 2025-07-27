import React from "react";
import "./TourCard.css";

const TourCard = ({ title, country, price, duration, tags, image }) => {
  return (
    <div className="tour-card">
      <h3>{title}</h3>
      <div className="badge">{country}</div>
      <div className="stars">⭐⭐⭐⭐⭐</div>
      <img src={image} alt={title} className="tour-image" />
      <div className="duration">
        <span className="duration-badge">{duration} Days</span>
      </div>
      <div className="icons">
        🏨 ✈ 🚗 🍽
      </div>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <p className="price">From <span>US ${price}</span> Per Person</p>
      <button className="info-btn">More Information ➜</button>
    </div>
  );
};

export default TourCard;
