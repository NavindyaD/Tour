import React from "react";
import { useNavigate } from "react-router-dom";
import "./Itinerary.css";
import { useTranslation } from "./hooks/useTranslation"; // Added import

// Images - replace with your actual image imports or URLs
import hotel1 from './hotel1.jpg';
import hotel2 from './hotel2.jpg';
import hotel3 from './hotel3.jpg';

const ThreeDayColomboTrip = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Added useTranslation hook

  const handleBookNow = () => {
    navigate("/buy");
  };

  const days = [
    {
      day: t.dayOneTitle,
      activities: [
        t.colomboArrival,
        t.colomboTransfer,
        t.colomboFort,
      ],
      hotel: t.cinnamonGrand,
      hotelImg: hotel1,
      hotelAlt: t.cinnamonGrand,
      notes: t.colomboDinner,
    },
    {
      day: t.dayTwoTitle,
      activities: [
        t.colomboBreakfast,
        t.colomboTemple,
        t.colomboLunch,
        t.colomboMuseum,
      ],
      hotel: t.shangriLa,
      hotelImg: hotel2,
      hotelAlt: t.shangriLa,
      notes: t.colomboOvernight,
    },
    {
      day: t.dayThreeTitle,
      activities: [
        t.colomboBreakfast,
        t.colomboRelax,
        t.colomboShopping,
        t.colomboPrepare,
      ],
      hotel: t.kingsbury,
      hotelImg: hotel3,
      hotelAlt: t.kingsbury,
      notes: t.colomboCheckout,
    },
  ];

  return (
    <div className="itinerary-wrapper">
      <header className="itinerary-header">
        <h1>{t.threeDayColomboTitle}</h1>
        <p className="intro-text">
          {t.threeDayColomboSubtitle}
        </p>
      </header>

      {/* Book Now button above itinerary, right aligned */}
      <div className="book-now-wrapper top-right">
        <button className="book-now-button" onClick={handleBookNow}>
          {t.bookNow}
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
              <h3>{t.katunayakeActivities}</h3> {/* Using a generic 'Activities' key */}
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
