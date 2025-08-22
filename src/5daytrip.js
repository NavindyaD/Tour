import React from "react";
import { useNavigate } from "react-router-dom";
import "./Itinerary.css";

// Images - replace with your actual image imports or URLs
import katunayakeAirport from './katunayakeAirport.jpg';
import sigiriyaRock from './sigiriyaRock.jpg';
import kandyTemple from './kandyTemple.jpg';
import ellaTrain from './ellaTrain.jpg';
import galleFort from './galleFort.jpg';

const FiveDaySriLankaTrip = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/buy");
  };

  const days = [
    {
      day: "Day 1",
      location: "Katunayake",
      activities: [
        "Arrival at Bandaranaike International Airport",
        "Meet and greet, transfer to nearby stay",
        "Optional visit to Negombo Beach (time permitting)",
        "Rest and recover from flight",
      ],
      hotel: "Comfortable stay near Katunayake",
      hotelImg: katunayakeAirport,
      hotelAlt: "Katunayake - Bandaranaike International Airport",
      notes: "Start your Sri Lankan highlights with a convenient first night near the airport.",
    },
    {
      day: "Day 2",
      location: "Sigiriya",
      activities: [
        "Transfer to Sigiriya",
        "Climb the Sigiriya Rock Fortress",
        "Explore the water gardens and frescoes",
        "Village experience or bicycle ride (optional)",
      ],
      hotel: "Guesthouse in Sigiriya",
      hotelImg: sigiriyaRock,
      hotelAlt: "Sigiriya Rock Fortress",
      notes: "Iconic UNESCO World Heritage site with sweeping views.",
    },
    {
      day: "Day 3",
      location: "Kandy",
      activities: [
        "Transfer to Kandy",
        "Temple of the Sacred Tooth Relic",
        "Royal Botanical Gardens, Peradeniya",
        "Kandy Lake walk and local market",
      ],
      hotel: "Hotel in Kandy",
      hotelImg: kandyTemple,
      hotelAlt: "Temple of the Sacred Tooth Relic, Kandy",
      notes: "Cultural capital with sacred heritage and lush gardens.",
    },
    {
      day: "Day 4",
      location: "Ella",
      activities: [
        "Scenic train journey to Ella",
        "Little Adam's Peak hike",
        "Nine Arches Bridge viewpoint",
        "Explore tea country vibes in town",
      ],
      hotel: "Cozy stay in Ella",
      hotelImg: ellaTrain,
      hotelAlt: "Scenic train near Ella",
      notes: "Cool-climate hill escape with stunning mountain scenery.",
    },
    {
      day: "Day 5",
      location: "Galle",
      activities: [
        "Transfer to Galle",
        "Explore the UNESCO-listed Galle Fort",
        "Lighthouse and ramparts walk",
        "Cafés, boutiques, and seaside views",
        "Continue to airport or extend beach stay",
      ],
      hotel: "Hotel in Galle (or late departure)",
      hotelImg: galleFort,
      hotelAlt: "Galle Fort ramparts and lighthouse",
      notes: "Historic coastal charm to wrap up your highlights tour.",
    },
  ];

  return (
    <div className="itinerary-wrapper">
      <header className="itinerary-header">
        <h1>5-Day Highlights of Sri Lanka</h1>
        <p className="intro-text">
          Highlights: Katunayake, Sigiriya, Kandy, Ella, Galle. A compact journey through Sri Lanka's must-see destinations.
        </p>
      </header>

      {/* Book Now button above itinerary, right aligned */}
      <div className="book-now-wrapper top-right">
        <button className="book-now-button" onClick={handleBookNow}>
          Book Now
        </button>
      </div>

      <div className="itinerary-cards-container">
        {days.map(({ day, location, activities, hotel, hotelImg, hotelAlt, notes }, index) => (
          <div key={index} className="itinerary-card">
            <div className="card-header">
              <div className="day-badge">{day}</div>
              <h2>{location}</h2>
              <h3>{hotel}</h3>
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

export default FiveDaySriLankaTrip;
