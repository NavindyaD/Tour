import React from "react";
import { useNavigate } from "react-router-dom";
import "./Itinerary.css";

// Images - replace with your actual image imports or URLs
import colomboFort from './colomboFort.jpg';
import gangaramaya from './gangaramaya.jpg';
import galleFace from './galleFace.jpg';
import hotel1 from './hotel1.jpg';
import hotel2 from './hotel2.jpg';
import hotel3 from './hotel3.jpg';

const ThreeDayColomboTrip = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/buy");
  };

  const days = [
    {
      day: "Day One",
      activities: [
        "Arrival at Bandaranaike International Airport",
        "Transfer to hotel and check-in",
        "Explore Colombo Fort area – colonial buildings, markets, and shopping",
      ],
      hotel: "Cinnamon Grand Colombo",
      hotelImg: hotel1,
      hotelAlt: "Cinnamon Grand Colombo",
      notes: "Dinner at hotel restaurant and overnight stay.",
    },
    {
      day: "Day Two",
      activities: [
        "Breakfast at hotel",
        "Visit Gangaramaya Temple and museum",
        "Lunch at local restaurant",
        "Afternoon visit to National Museum and Viharamahadevi Park",
      ],
      hotel: "Shangri-La Colombo",
      hotelImg: hotel2,
      hotelAlt: "Shangri-La Colombo",
      notes: "Dinner and overnight stay.",
    },
    {
      day: "Day Three",
      activities: [
        "Breakfast at hotel",
        "Relax at Galle Face Green and watch the ocean",
        "Shopping at Odel or Barefoot Gallery",
        "Prepare for departure",
      ],
      hotel: "The Kingsbury Colombo",
      hotelImg: hotel3,
      hotelAlt: "The Kingsbury Colombo",
      notes: "Check-out and transfer to airport.",
    },
  ];

  return (
    <div className="itinerary-wrapper">
      <header className="itinerary-header">
        <h1>3-Day Colombo Trip - Sri Lanka</h1>
        <p className="intro-text">
          Experience the best of Colombo with luxury hotels, cultural visits, shopping, and relaxation by the ocean.
        </p>
      </header>

      {/* Book Now button above itinerary, right aligned */}
      <div className="book-now-wrapper top-right">
        <button className="book-now-button" onClick={handleBookNow}>
          Book Now
        </button>
      </div>

      <div className="itinerary-cards-container">
        {days.map(({ day, activities, hotel, hotelImg, hotelAlt, notes }, index) => (
          <div key={index} className="itinerary-card">
            <div className="card-header">
              <div className="day-badge">{day}</div>
              <h2>{hotel}</h2>
            </div>

            <div className="card-content">
              <h3>Activities</h3>
              <ul>
                {activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
              <img
                src={hotelImg}
                alt={hotelAlt}
                className="hotel-image"
              />
              <p className="notes">{notes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDayColomboTrip;
