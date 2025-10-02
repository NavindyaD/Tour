import React from "react";
import "./DealPage.css";
import { useTranslation } from "./hooks/useTranslation";

const DealsPage = () => {
  const { t } = useTranslation();
  
  const deals = [
    {
      title: t.exclusiveHoneymoonTitle,
      image: "https://www.heretravels.com/wp-content/uploads/2023/05/honeymoon-deal.jpg",
      price: "$999",
      duration: "6 Days / 5 Nights",
      description: t.exclusiveHoneymoonDesc,
    },
    {
      title: t.adventureWildlifeTitle,
      image: "https://www.heretravels.com/wp-content/uploads/2023/05/wildlife-deal.jpg",
      price: "$850",
      duration: "5 Days / 4 Nights",
      description: t.adventureWildlifeDesc,
    },
    {
      title: t.luxuryBeachTitle,
      image: "https://www.heretravels.com/wp-content/uploads/2023/05/beach-deal.jpg",
      price: "$1,200",
      duration: "7 Days / 6 Nights",
      description: t.luxuryBeachDesc,
    },
    {
      title: t.culturalHeritageTitle,
      image: "https://www.heretravels.com/wp-content/uploads/2023/05/cultural-deal.jpg",
      price: "$1,050",
      duration: "6 Days / 5 Nights",
      description: t.culturalHeritageDesc,
    },
    {
      title: t.budgetFamilyTitle,
      image: "https://www.heretravels.com/wp-content/uploads/2023/05/family-deal.jpg",
      price: "$780",
      duration: "5 Days / 4 Nights",
      description: t.budgetFamilyDesc,
    },
    {
      title: t.ultimateAdventureTitle,
      image: "https://www.heretravels.com/wp-content/uploads/2023/05/adventure-deal.jpg",
      price: "$1,300",
      duration: "10 Days / 9 Nights",
      description: t.ultimateAdventureDesc,
    },
  ];
  
  return (
    <div className="deals-container">
      <h1 className="deals-title">{t.specialDealsTitle}</h1>
      <p className="deals-subtitle">
        {t.specialDealsSubtitle}
      </p>

      <div className="deals-grid">
        {deals.map((deal, index) => (
          <div key={index} className="deal-card">
            <img src={deal.image} alt={deal.title} className="deal-image" />
            <div className="deal-content">
              <h2 className="deal-title">{deal.title}</h2>
              <p className="deal-duration"><strong>{t.duration}:</strong> {deal.duration}</p>
              <p className="deal-price"><strong>{t.price}:</strong> {deal.price}</p>
              <p className="deal-description">{deal.description}</p>
              <button className="deal-btn">{t.viewDetails}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsPage;
