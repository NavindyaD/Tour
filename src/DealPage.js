import React from "react";
import "./DealPage.css";

const deals = [
  {
    title: "Exclusive Sri Lanka Honeymoon Package",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/honeymoon-deal.jpg",
    price: "$999",
    duration: "6 Days / 5 Nights",
    description: "Enjoy a luxurious honeymoon with romantic getaways, beach resorts, and cultural experiences.",
  },
  {
    title: "Adventure & Wildlife Tour",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/wildlife-deal.jpg",
    price: "$850",
    duration: "5 Days / 4 Nights",
    description: "Explore the wilderness of Sri Lanka with exciting safaris and nature expeditions.",
  },
  {
    title: "Luxury Beach Vacation",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/beach-deal.jpg",
    price: "$1,200",
    duration: "7 Days / 6 Nights",
    description: "Relax on the finest beaches, enjoy water sports, and experience top-notch hospitality.",
  },
  {
    title: "Cultural Heritage Tour",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/cultural-deal.jpg",
    price: "$1,050",
    duration: "6 Days / 5 Nights",
    description: "Visit Sri Lanka's UNESCO heritage sites, ancient temples, and vibrant cities.",
  },
  {
    title: "Budget Family Vacation",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/family-deal.jpg",
    price: "$780",
    duration: "5 Days / 4 Nights",
    description: "An affordable family-friendly package with exciting activities for all ages.",
  },
  {
    title: "Ultimate Adventure Tour",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/adventure-deal.jpg",
    price: "$1,300",
    duration: "10 Days / 9 Nights",
    description: "Trekking, rafting, and adventure sports in Sri Lanka's stunning landscapes.",
  },
];

const DealsPage = () => {
  return (
    <div className="deals-container">
      <h1 className="deals-title">Exclusive Travel Deals</h1>
      <p className="deals-subtitle">
        Discover the best travel packages at unbeatable prices. Book your dream vacation today!
      </p>

      <div className="deals-grid">
        {deals.map((deal, index) => (
          <div key={index} className="deal-card">
            <img src={deal.image} alt={deal.title} className="deal-image" />
            <div className="deal-content">
              <h2 className="deal-title">{deal.title}</h2>
              <p className="deal-duration"><strong>Duration:</strong> {deal.duration}</p>
              <p className="deal-price"><strong>Price:</strong> {deal.price}</p>
              <p className="deal-description">{deal.description}</p>
              <button className="deal-btn">View Deal</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsPage;
