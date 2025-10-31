import React from "react";
import { useNavigate } from "react-router-dom";
import "./Itinerary.css";
import pinnawalaImg from "./elephants.png";
import kandyTempleImg from "./Ktemple.png";
import lotusImg from "./gadaladeniya.jpg";
import exploreImg from "./wax.jpg";
import { useTranslation } from "./hooks/useTranslation";

const Package1Details = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleBookNow = () => {
    navigate("/buy");
  };

  const packageInfo = {
    duration: t.package1Duration,
    charges: t.package1Charges,
    hotel: t.package1Hotel,
    price: t.package1Price
  };

  const days = [
    {
      day: t.package1Day1,
      activities: [
        t.package1Day1Activity1,
        t.package1Day1Activity2
      ],
      image: pinnawalaImg,
      alt: "Pinnawala Elephant Orphanage"
    },
    {
      day: t.package1Day2,
      activities: [
        t.package1Day2Activity1,
        t.package1Day2Activity2
      ],
      image: kandyTempleImg,
      alt: "Kandy Temple"
    },
    {
      day: t.package1Day3,
      activities: [
        t.package1Day3Activity1,
        t.package1Day3Activity2
      ],
      image: lotusImg,
      alt: "Peradeniya Garden and Temples"
    },
    {
      day: t.package1Day4,
      activities: [
        t.package1Day4Activity1,
        t.package1Day4Activity2
      ],
      image: exploreImg,
      alt: "Kandy Cultural Experience"
    }
  ];

  return (
    <div className="itinerary-wrapper">
      <header className="itinerary-header">
        <h1>{t.package1Title}</h1>
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
              <h3>{t.package1Activities}</h3>
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

export default Package1Details;

