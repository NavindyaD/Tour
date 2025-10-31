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
import mirissaBeach from './beaches.jpg';
import anuradhapura from './anu.png';
import nuwaraEliya from './wildlife.png';
import bentota from './bentota.jpg';
import colombo from './colombo.jpg';

const FourteenDaySriLankaTrip = () => {
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
      location: t.ancientCityTitle,
      activities: [
        t.ancientCityTransfer,
        t.ancientCityExplore,
        t.ancientCityTemple,
        t.ancientCityMuseum,
      ],
      hotel: t.ancientCityStay,
      hotelImg: anuradhapura,
      hotelAlt: t.ancientCityLocation,
      notes: t.ancientCityDescription,
    },
    {
      day: t.day3Title,
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
      day: t.day4Title,
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
      day: t.day5Title,
      location: t.nuwaraEliyaTitle,
      activities: [
        t.nuwaraEliyaTransfer,
        t.nuwaraEliyaTea,
        t.nuwaraEliyaLake,
        t.nuwaraEliyaExplore,
      ],
      hotel: t.nuwaraEliyaStay,
      hotelImg: nuwaraEliya,
      hotelAlt: t.nuwaraEliyaLocation,
      notes: t.nuwaraEliyaDescription,
    },
    {
      day: t.day6Title,
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
      day: t.day7Title,
      location: t.mirissaTitle,
      activities: [
        t.mirissaTransfer,
        t.mirissaBeach,
        t.mirissaWhale,
        t.mirissaRelax,
      ],
      hotel: t.mirissaStay,
      hotelImg: mirissaBeach,
      hotelAlt: t.mirissaLocation,
      notes: t.mirissaDescription,
    },
    {
      day: t.day8Title,
      location: t.departureTitle,
      activities: [
        t.departureBreakfast,
        t.departureShopping,
        t.departureTransfer,
        t.departureAirport,
      ],
      hotel: t.departureStay,
      hotelImg: katunayakeAirport,
      hotelAlt: t.departureLocation,
      notes: t.departureDescription,
    },
  ];

  return (
    <div className="itinerary-wrapper">
      <header className="itinerary-header">
        <h1>{t.completeSriLankaTitle}</h1>
        <p className="intro-text">
          {t.completeSriLankaSubtitle}
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
              <h3>{t.activities}</h3>
              <ul>
                {activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
              <img
                src={hotelImg}
                alt={hotelAlt}
                className="hotel-image"
                onError={(e) => {
                  console.log('Image failed to load:', hotelImg);
                  e.target.style.display = 'none';
                }}
              />
              <p className="notes">{notes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourteenDaySriLankaTrip;
