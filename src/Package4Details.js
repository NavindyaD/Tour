import React from "react";
import { useNavigate } from "react-router-dom";
import "./Itinerary.css";
import pinnawalaImg from "./elephants.png";
import gardenImg from "./pera.jpg";
import sigiriyaImg from "./sigiriyaRock.jpg";
import safariImg from "./safari.jpg";
import { useTranslation } from "./hooks/useTranslation";

const Package4Details = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleBookNow = () => {
    navigate("/buy");
  };

  const packageInfo = {
    duration: t.package4Duration,
    charges: t.package4Charges,
    hotel: t.package4Hotel,
    price: t.package4Price
  };

  const days = [
    {
      day: t.package4Day1,
      activities: [
        t.package4Day1Activity1,
        t.package4Day1Activity2,
        t.package4Day1Activity3
      ],
      image: pinnawalaImg,
      alt: "Pinnawala Elephant Orphanage and Kandy Temple"
    },
    {
      day: t.package4Day2,
      activities: [
        t.package4Day2Activity1,
        t.package4Day2Activity2,
        t.package4Day2Activity3
      ],
      image: gardenImg,
      alt: "Peradeniya Garden and Shopping"
    },
    {
      day: t.package4Day3,
      activities: [
        t.package4Day3Activity1
      ],
      image: sigiriyaImg,
      alt: "Sigiriya Rock Fortress"
    },
    {
      day: t.package4Day4,
      activities: [
        t.package4Day4Activity1
      ],
      image: safariImg,
      alt: "Habarana Safari Wildlife Experience"
    }
  ];

  return (
    <div className="itinerary-wrapper">
      <header className="itinerary-header">
        <h1>{t.package4Title}</h1>
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
              <h3>{t.package4Activities}</h3>
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

export default Package4Details;

