import React from "react";
import { useNavigate } from "react-router-dom";
import "./Itinerary.css";
import pinnawalaImg from "./elephants.png";
import kandyTempleImg from "./Ktemple.png";
import lotusImg from "./gadaladeniya.jpg";
import exploreImg from "./wax.jpg";

const Package1Details = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/buy");
  };

  const packageInfo = {
    duration: "4 nights 5 days",
    charges: "Hotel and transport charges only",
    hotel: "4 star hotel include bed, dinner & breakfast",
    price: "Two person per day $335"
  };

  const days = [
    {
      day: "Day 1",
      activities: [
        "Pinnawala",
        "Kandy (Kandy dance)"
      ],
      image: pinnawalaImg,
      alt: "Pinnawala Elephant Orphanage"
    },
    {
      day: "Day 2",
      activities: [
        "Nelligala",
        "Kandy temple"
      ],
      image: kandyTempleImg,
      alt: "Kandy Temple"
    },
    {
      day: "Day 3",
      activities: [
        "Gadaladeniya, Ambakke",
        "Peradeniya garden"
      ],
      image: lotusImg,
      alt: "Peradeniya Garden and Temples"
    },
    {
      day: "Day 4",
      activities: [
        "Wax museum Kandy",
        "Gem, spices and bathik shopping"
      ],
      image: exploreImg,
      alt: "Kandy Cultural Experience"
    }
  ];

  return (
    <div className="itinerary-wrapper">
      <header className="itinerary-header">
        <h1>Package 1 - Sri Lanka</h1>
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
          Book Now
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
              <h3>Activities</h3>
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

