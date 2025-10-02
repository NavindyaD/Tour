import React from "react";
import { useNavigate } from "react-router-dom";
import "./Itinerary.css";
import { useTranslation } from "./hooks/useTranslation";

// Images - replace with your actual image imports or URLs
import katunayakeAirport from './katunayakeAirport.jpg';
import sigiriyaRock from './sigiriyaRock.jpg';
import kandyTemple from './kandyTemple.jpg';
import ellaTrain from './ellaTrain.jpg';

const HillBeachTrip = () => {
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
      location: t.sigiriyaAdventureTitle,
      activities: [
        t.sigiriyaAdventureTransfer,
        t.sigiriyaAdventureClimb,
        t.sigiriyaAdventureExplore,
        t.sigiriyaAdventureVillage,
      ],
      hotel: t.sigiriyaAdventureStay,
      hotelImg: sigiriyaRock,
      hotelAlt: t.sigiriyaAdventureLocation,
      notes: t.sigiriyaAdventureDescription,
    },
    {
      day: t.day3Title,
      location: t.kandyAdventureTitle,
      activities: [
        t.kandyAdventureTransfer,
        t.kandyAdventureTemple,
        t.kandyAdventureGardens,
        t.kandyAdventureLake,
      ],
      hotel: t.kandyAdventureStay,
      hotelImg: kandyTemple,
      hotelAlt: t.kandyAdventureLocation,
      notes: t.kandyAdventureDescription,
    },
    {
      day: t.day4Title,
      location: t.nuwaraEliyaAdventureTitle,
      activities: [
        t.nuwaraEliyaAdventureTransfer,
        t.nuwaraEliyaAdventureTea,
        t.nuwaraEliyaAdventureLake,
        t.nuwaraEliyaAdventureExplore,
      ],
      hotel: t.nuwaraEliyaAdventureStay,
      hotelImg: "https://source.unsplash.com/400x250/?tea-plantation,sri-lanka,nuwara-eliya",
      hotelAlt: t.nuwaraEliyaAdventureLocation,
      notes: t.nuwaraEliyaAdventureDescription,
    },
    {
      day: t.day5Title,
      location: t.ellaAdventureTitle,
      activities: [
        t.ellaAdventureTransfer,
        t.ellaAdventureTrain,
        t.ellaAdventurePeak,
        t.ellaAdventureBridge,
      ],
      hotel: t.ellaAdventureStay,
      hotelImg: ellaTrain,
      hotelAlt: t.ellaAdventureLocation,
      notes: t.ellaAdventureDescription,
    },
    {
      day: t.day6Title,
      location: t.arugamBayTitle,
      activities: [
        t.arugamBayTransfer,
        t.arugamBaySurf,
        t.arugamBayBeach,
        t.arugamBaySunset,
      ],
      hotel: t.arugamBayStay,
      hotelImg: "https://source.unsplash.com/400x250/?arugam-bay,surfing,sri-lanka",
      hotelAlt: t.arugamBayLocation,
      notes: t.arugamBayDescription,
    },
    {
      day: t.day7Title,
      location: t.mirissaAdventureTitle,
      activities: [
        t.mirissaAdventureTransfer,
        t.mirissaAdventureBeach,
        t.mirissaAdventureWhale,
        t.mirissaAdventureSnorkel,
      ],
      hotel: t.mirissaAdventureStay,
      hotelImg: "https://source.unsplash.com/400x250/?mirissa,beach,sri-lanka",
      hotelAlt: t.mirissaAdventureLocation,
      notes: t.mirissaAdventureDescription,
    },
    {
      day: t.day8Title,
      location: t.colomboAdventureTitle,
      activities: [
        t.colomboAdventureTransfer,
        t.colomboAdventureFort,
        t.colomboAdventureTemple,
        t.colomboAdventureShopping,
      ],
      hotel: t.colomboAdventureStay,
      hotelImg: "https://source.unsplash.com/400x250/?colombo,sri-lanka,capital",
      hotelAlt: t.colomboAdventureLocation,
      notes: t.colomboAdventureDescription,
    },
  ];

  return (
    <div className="itinerary-wrapper">
      <header className="itinerary-header">
        <h1>{t.hillCountryBeachCircuitTitle}</h1>
        <p className="intro-text">
          {t.hillCountryBeachCircuitSubtitle}
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

export default HillBeachTrip;
