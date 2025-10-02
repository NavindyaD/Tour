import React from "react";
import "./ToursPage.css";
import { useTranslation } from "./hooks/useTranslation";

const ToursPage = () => {
  const { t } = useTranslation();
  
  const tours = [
    {
      title: t.culturalTourTitle,
      image: "https://www.heretravels.com/wp-content/uploads/2023/05/cultural-tour.jpg",
      duration: "7 Days / 6 Nights",
      price: "$1200",
      description: t.culturalTourDesc,
    },
    {
      title: t.wildlifeTourTitle,
      image: "https://www.heretravels.com/wp-content/uploads/2023/05/wildlife-tour.jpg",
      duration: "5 Days / 4 Nights",
      price: "$950",
      description: t.wildlifeTourDesc,
    },
    {
      title: t.beachTourTitle,
      image: "https://www.heretravels.com/wp-content/uploads/2023/05/beach-tour.jpg",
      duration: "6 Days / 5 Nights",
      price: "$1100",
      description: t.beachTourDesc,
    },
    {
      title: t.hillCountryTourTitle,
      image: "https://www.heretravels.com/wp-content/uploads/2023/05/hill-country-tour.jpg",
      duration: "8 Days / 7 Nights",
      price: "$1300",
      description: t.hillCountryTourDesc,
    },
    {
      title: t.honeymoonTourTitle,
      image: "https://www.heretravels.com/wp-content/uploads/2023/05/honeymoon-tour.jpg",
      duration: "7 Days / 6 Nights",
      price: "$1500",
      description: t.honeymoonTourDesc,
    },
    {
      title: t.adventureTourTitle,
      image: "https://www.heretravels.com/wp-content/uploads/2023/05/adventure-tour.jpg",
      duration: "10 Days / 9 Nights",
      price: "$1400",
      description: t.adventureTourDesc,
    },
  ];
  
  return (
    <div className="tours-container">
      <h1 className="tours-title">{t.ourToursTitle}</h1>
      <p className="tours-subtitle">
        {t.ourToursSubtitle}
      </p>

      <div className="tours-grid">
        {tours.map((tour, index) => (
          <div key={index} className="tour-card">
            <img src={tour.image} alt={tour.title} className="tour-image" />
            <div className="tour-content">
              <h2 className="tour-title">{tour.title}</h2>
              <p className="tour-duration"><strong>{t.duration}:</strong> {tour.duration}</p>
              <p className="tour-price"><strong>{t.price}:</strong> {tour.price}</p>
              <p className="tour-description">{tour.description}</p>
              <button className="tour-btn">{t.viewDetails}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToursPage;
