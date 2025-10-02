import React from "react";
import { useNavigate } from "react-router-dom";
import "./Itinerary.css";
import { useTranslation } from "./hooks/useTranslation";

// Images - replace with your actual image imports or URLs
import katunayakeAirport from './katunayakeAirport.jpg';
import sigiriyaRock from './sigiriyaRock.jpg';
import kandyTemple from './kandyTemple.jpg';
import ellaTrain from './ellaTrain.jpg';

const WildlifeTrip = () => {
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
      location: t.udawalaweTitle,
      activities: [
        t.udawalaweTransfer,
        t.udawalaweSafari,
        t.udawalaweElephants,
        t.udawalaweBirds,
      ],
      hotel: t.udawalaweStay,
      hotelImg: "https://source.unsplash.com/400x250/?elephant,safari,sri-lanka",
      hotelAlt: t.udawalaweLocation,
      notes: t.udawalaweDescription,
    },
    {
      day: t.day3Title,
      location: t.ellaWildlifeTitle,
      activities: [
        t.ellaWildlifeTransfer,
        t.ellaWildlifeTrain,
        t.ellaWildlifePeak,
        t.ellaWildlifeBridge,
      ],
      hotel: t.ellaWildlifeStay,
      hotelImg: ellaTrain,
      hotelAlt: t.ellaWildlifeLocation,
      notes: t.ellaWildlifeDescription,
    },
    {
      day: t.day4Title,
      location: t.nuwaraEliyaWildlifeTitle,
      activities: [
        t.nuwaraEliyaWildlifeTransfer,
        t.nuwaraEliyaWildlifeTea,
        t.nuwaraEliyaWildlifeLake,
        t.nuwaraEliyaWildlifeExplore,
      ],
      hotel: t.nuwaraEliyaWildlifeStay,
      hotelImg: "https://source.unsplash.com/400x250/?tea-plantation,sri-lanka,nuwara-eliya",
      hotelAlt: t.nuwaraEliyaWildlifeLocation,
      notes: t.nuwaraEliyaWildlifeDescription,
    },
    {
      day: t.day5Title,
      location: t.kandyWildlifeTitle,
      activities: [
        t.kandyWildlifeTransfer,
        t.kandyWildlifeTemple,
        t.kandyWildlifeGardens,
        t.kandyWildlifeLake,
      ],
      hotel: t.kandyWildlifeStay,
      hotelImg: kandyTemple,
      hotelAlt: t.kandyWildlifeLocation,
      notes: t.kandyWildlifeDescription,
    },
    {
      day: t.day6Title,
      location: t.sigiriyaWildlifeTitle,
      activities: [
        t.sigiriyaWildlifeTransfer,
        t.sigiriyaWildlifeClimb,
        t.sigiriyaWildlifeExplore,
        t.sigiriyaWildlifeVillage,
      ],
      hotel: t.sigiriyaWildlifeStay,
      hotelImg: sigiriyaRock,
      hotelAlt: t.sigiriyaWildlifeLocation,
      notes: t.sigiriyaWildlifeDescription,
    },
    {
      day: t.day7Title,
      location: t.anuradhapuraWildlifeTitle,
      activities: [
        t.anuradhapuraWildlifeTransfer,
        t.anuradhapuraWildlifeExplore,
        t.anuradhapuraWildlifeTemple,
        t.anuradhapuraWildlifeMuseum,
      ],
      hotel: t.anuradhapuraWildlifeStay,
      hotelImg: "https://source.unsplash.com/400x250/?ancient,temple,sri-lanka,anuradhapura",
      hotelAlt: t.anuradhapuraWildlifeLocation,
      notes: t.anuradhapuraWildlifeDescription,
    },
    {
      day: t.day8Title,
      location: t.polonnaruwaTitle,
      activities: [
        t.polonnaruwaTransfer,
        t.polonnaruwaExplore,
        t.polonnaruwaGalVihara,
        t.polonnaruwaMuseum,
      ],
      hotel: t.polonnaruwaStay,
      hotelImg: "https://source.unsplash.com/400x250/?ancient,ruins,sri-lanka,polonnaruwa",
      hotelAlt: t.polonnaruwaLocation,
      notes: t.polonnaruwaDescription,
    },
    {
      day: t.day9Title,
      location: t.trincomaleeTitle,
      activities: [
        t.trincomaleeTransfer,
        t.trincomaleeBeach,
        t.trincomaleeWhale,
        t.trincomaleeFort,
      ],
      hotel: t.trincomaleeStay,
      hotelImg: "https://source.unsplash.com/400x250/?beach,sri-lanka,trincomalee",
      hotelAlt: t.trincomaleeLocation,
      notes: t.trincomaleeDescription,
    },
    {
      day: t.day10Title,
      location: t.colomboWildlifeTitle,
      activities: [
        t.colomboWildlifeTransfer,
        t.colomboWildlifeFort,
        t.colomboWildlifeTemple,
        t.colomboWildlifeShopping,
      ],
      hotel: t.colomboWildlifeStay,
      hotelImg: "https://source.unsplash.com/400x250/?colombo,sri-lanka,capital",
      hotelAlt: t.colomboWildlifeLocation,
      notes: t.colomboWildlifeDescription,
    },
  ];

  return (
    <div className="itinerary-wrapper">
      <header className="itinerary-header">
        <h1>{t.wildlifeCulturalCircuitTitle}</h1>
        <p className="intro-text">
          {t.wildlifeCulturalCircuitSubtitle}
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

export default WildlifeTrip;
