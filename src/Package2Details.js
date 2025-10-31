import React from "react";
import { useNavigate } from "react-router-dom";
import "./Itinerary.css";
import pinnawalaImg from "./elephants.png";
import peradeniyaImg from "./nelligala.jpg";
import nuwaraEliyaImg from "./greg.jpg";
import exploreImg from "./ambe.jpg";
import { useTranslation } from "./hooks/useTranslation";

const Package2Details = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleBookNow = () => {
    navigate("/buy");
  };

  const packageInfo = {
    duration: t.package2Duration,
    charges: t.package2Charges,
    hotel: t.package2Hotel,
    price: t.package2Price
  };

  const days = [
    {
      day: t.package2Day1,
      activities: [
        t.package2Day1Activity1,
        t.package2Day1Activity2,
        t.package2Day1Activity3
      ],
      image: pinnawalaImg,
      alt: "Pinnawala Elephant Orphanage"
    },
    {
      day: t.package2Day2,
      activities: [
        t.package2Day2Activity1,
        t.package2Day2Activity2,
        t.package2Day2Activity3
      ],
      image: peradeniyaImg,
      alt: "Peradeniya Garden"
    },
    {
      day: t.package2Day3,
      activities: [
        t.package2Day3Activity1,
        t.package2Day3Activity2
      ],
      image: nuwaraEliyaImg,
      alt: "Nuwara Eliya"
    },
    {
      day: t.package2Day4,
      activities: [
        t.package2Day4Activity1
      ],
      image: exploreImg,
      alt: "Farm and Exploration"
    }
  ];

  return (
    <div className="itinerary-wrapper">
      <header className="itinerary-header">
        <h1>{t.package2Title}</h1>
        <div className="package-info-section">
          <p className="intro-text">
            <strong>{packageInfo.duration}</strong>
          </p>
          <p className="intro-text">{packageInfo.charges}</p>
          <p className="intro-text">{packageInfo.hotel}</p>
          <p className="intro-text">
            <strong style={{ color: "#1a73e8", fontSize: "1.2rem" }}>
              {packageInfo.price}
            </strong>
          </p>
        </div>
      </header>

      {/* Book Now button above itinerary, right aligned */}
      <div className="book-now-wrapper top-right">
        <button className="book-now-button" onClick={handleBookNow}>
          {t.bookNow}
        </button>
      </div>

      <div className="itinerary-cards-container">
        {days.map(({ day, activities, image, alt }, index) => (
          <div key={index} className="itinerary-card">
            <div className="card-header">
              <div className="day-badge">{day}</div>
            </div>

            <div className="card-content">
              {image && (
                <img 
                  src={image} 
                  alt={alt || `${day} activities`} 
                  className="activity-image"
                />
              )}
              <h3>{t.package2Activities}</h3>
              <ul>
                {activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Package2Details;

