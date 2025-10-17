import React from "react";
import { useNavigate } from "react-router-dom";
import "./Itinerary.css";
import { useTranslation } from "./hooks/useTranslation";

// Images - replace with your actual image imports or URLs
import katunayakeAirport from './katunayakeAirport.jpg';
import sigiriyaRock from './sigiriyaRock.jpg';
import kandyTemple from './kandyTemple.jpg';
import nuwaraEliya from './nuwaraeliya.png';
import bentota from './bentota.png';
import colombo from './colo.png';

const CulturalBeachTrip = () => {
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
      location: t.sigiriyaCulturalTitle,
      activities: [
        t.sigiriyaCulturalTransfer,
        t.sigiriyaCulturalClimb,
        t.sigiriyaCulturalExplore,
        t.sigiriyaCulturalVillage,
      ],
      hotel: t.sigiriyaCulturalStay,
      hotelImg: sigiriyaRock,
      hotelAlt: t.sigiriyaCulturalLocation,
      notes: t.sigiriyaCulturalDescription,
    },
    {
      day: t.day3Title,
      location: t.kandyCulturalTitle,
      activities: [
        t.kandyCulturalTransfer,
        t.kandyCulturalTemple,
        t.kandyCulturalGardens,
        t.kandyCulturalLake,
      ],
      hotel: t.kandyCulturalStay,
      hotelImg: kandyTemple,
      hotelAlt: t.kandyCulturalLocation,
      notes: t.kandyCulturalDescription,
    },
    {
      day: t.day4Title,
      location: t.nuwaraEliyaCulturalTitle,
      activities: [
        t.nuwaraEliyaCulturalTransfer,
        t.nuwaraEliyaCulturalTea,
        t.nuwaraEliyaCulturalLake,
        t.nuwaraEliyaCulturalExplore,
      ],
      hotel: t.nuwaraEliyaCulturalStay,
      hotelImg: nuwaraEliya,
      hotelAlt: t.nuwaraEliyaCulturalLocation,
      notes: t.nuwaraEliyaCulturalDescription,
    },
    {
      day: t.day5Title,
      location: t.bentotaCulturalTitle,
      activities: [
        t.bentotaCulturalTransfer,
        t.bentotaCulturalRiver,
        t.bentotaCulturalBeach,
        t.bentotaCulturalSpa,
      ],
      hotel: t.bentotaCulturalStay,
      hotelImg: bentota,
      hotelAlt: t.bentotaCulturalLocation,
      notes: t.bentotaCulturalDescription,
    },
    {
      day: t.day6Title,
      location: t.colomboCulturalTitle,
      activities: [
        t.colomboCulturalTransfer,
        t.colomboCulturalFort,
        t.colomboCulturalTemple,
        t.colomboCulturalShopping,
      ],
      hotel: t.colomboCulturalStay,
      hotelImg: colombo,
      hotelAlt: t.colomboCulturalLocation,
      notes: t.colomboCulturalDescription,
    },
  ];

  return (
    <div className="itinerary-wrapper">
      <header className="itinerary-header">
        <h1>{t.culturalTriangleBeachCircuitTitle}</h1>
        <p className="intro-text">
          {t.culturalTriangleBeachCircuitSubtitle}
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

export default CulturalBeachTrip;

