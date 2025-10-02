import React from "react";
import { useNavigate } from "react-router-dom";
import "./Itinerary.css";
import { useTranslation } from "./hooks/useTranslation";

// Images - replace with your actual image imports or URLs
import katunayakeAirport from './katunayakeAirport.jpg';
import sigiriyaRock from './sigiriyaRock.jpg';
import kandyTemple from './kandyTemple.jpg';
import ellaTrain from './ellaTrain.jpg';
import galleFort from './galleFort.jpg';

const FiveDaySriLankaTrip = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleBookNow = () => {
    navigate("/buy");
  };

  const days = [
    {
      day: t.day1Title,
      location: t.katunayakeTitle,
      activities: [
        t.katunayakeArrival,
        t.katunayakeMeetGreet,
        t.katunayakeNegombo,
        t.katunayakeRest,
      ],
      hotel: t.katunayakeStay,
      hotelImg: katunayakeAirport,
      hotelAlt: t.katunayakeLocation,
      notes: t.katunayakeDescription,
    },
    {
      day: t.day2Title,
      location: t.sigiriyaTitle,
      activities: [
        t.sigiriyaTransfer,
        t.sigiriyaClimb,
        t.sigiriyaExplore,
        t.sigiriyaVillage,
      ],
      hotel: t.sigiriyaStay,
      hotelImg: sigiriyaRock,
      hotelAlt: t.sigiriyaLocation,
      notes: t.sigiriyaDescription,
    },
    {
      day: t.day3Title,
      location: t.kandyTitle,
      activities: [
        t.kandyTransfer,
        t.kandyTemple,
        t.kandyGardens,
        t.kandyLake,
      ],
      hotel: t.kandyStay,
      hotelImg: kandyTemple,
      hotelAlt: t.kandyLocation,
      notes: t.kandyDescription,
    },
    {
      day: t.day4Title,
      location: t.ellaTitle,
      activities: [
        t.ellaTrain,
        t.ellaPeak,
        t.ellaBridge,
        t.ellaExplore,
      ],
      hotel: t.ellaStay,
      hotelImg: ellaTrain,
      hotelAlt: t.ellaLocation,
      notes: t.ellaDescription,
    },
    {
      day: t.day5Title,
      location: t.galleTitle,
      activities: [
        t.galleTransfer,
        t.galleFort,
        t.galleLighthouse,
        t.galleCafes,
        t.galleContinue,
      ],
      hotel: t.galleStay,
      hotelImg: galleFort,
      hotelAlt: t.galleLocation,
      notes: t.galleDescription,
    },
  ];

  return (
    <div className="itinerary-wrapper">
      <header className="itinerary-header">
        <h1>{t.fiveDayHighlightsTitle}</h1>
        <p className="intro-text">
          {t.fiveDayHighlightsSubtitle}
        </p>
      </header>

      {/* Book Now button above itinerary, right aligned */}
      <div className="book-now-wrapper top-right">
        <button className="book-now-button" onClick={handleBookNow}>
          {t.bookNow}
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
              <h3>{t.katunayakeActivities}</h3>
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
