import React from "react";
import { useNavigate } from "react-router-dom";
import "./TourCard.css";
import { useTranslation } from "./hooks/useTranslation";

const TourCard = ({ title, country, price, duration, tags, image }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleMoreInfoClick = () => {
    if (title === "Package 1") {
      navigate("/package1");
    } else if (title === "Package 2") {
      navigate("/package2");
    } else if (title === "Package 3") {
      navigate("/package3");
    } else if (title === "Package 4") {
      navigate("/package4");
    } else if (title === t.completeSriLankaTitle) {
      navigate("/14daytrip");
    } else if (title === t.wildlifeCulturalTitle) {
      navigate("/wildlifetrip");
    } else if (title === t.hillCountryBeachTitle) {
      navigate("/hillbeachtrip");
    } else if (title === t.culturalTriangleBeachTitle) {
      navigate("/culturalbeachtrip");
    } else if (title === t.fiveDayBudgetPackTitle) {
      navigate("/5daytrip");
    } else if (title === t.threeDayColomboCityTitle) {
      navigate("/hello");
    } else if (title === t.familyTripTitle) {
      navigate("/bye");
    } else {
      alert("No page defined for this tour.");
    }
  };

  return (
    <div className="tour-card">
      <h3>{title}</h3>
      <div className="badge">{country}</div>
      <div className="stars">★★★★★</div>
      <img src={image} alt={title} className="tour-image" />
      <div className="icons">🏨 ✈️ 🚗 🍽️</div>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <button className="info-btn" onClick={handleMoreInfoClick}>
        {t.moreInformation}
      </button>
    </div>
  );
};

export default TourCard;
