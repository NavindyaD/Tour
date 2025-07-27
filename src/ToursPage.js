import React from "react";
import "./ToursPage.css";

const tours = [
  {
    title: "Sri Lanka Cultural Tour",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/cultural-tour.jpg",
    duration: "7 Days / 6 Nights",
    price: "$1200",
    description: "Experience the rich heritage and historical sites of Sri Lanka in this cultural tour.",
  },
  {
    title: "Wildlife Safari Adventure",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/wildlife-tour.jpg",
    duration: "5 Days / 4 Nights",
    price: "$950",
    description: "Explore Sri Lanka’s famous wildlife parks and witness exotic animals in their natural habitat.",
  },
  {
    title: "Beach Getaway",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/beach-tour.jpg",
    duration: "6 Days / 5 Nights",
    price: "$1100",
    description: "Relax on the most beautiful beaches of Sri Lanka with crystal-clear waters and golden sands.",
  },
  {
    title: "Hill Country Adventure",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/hill-country-tour.jpg",
    duration: "8 Days / 7 Nights",
    price: "$1300",
    description: "Discover the scenic beauty of Sri Lanka’s mountains, waterfalls, and tea plantations.",
  },
  {
    title: "Luxury Honeymoon Package",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/honeymoon-tour.jpg",
    duration: "7 Days / 6 Nights",
    price: "$1500",
    description: "Enjoy a romantic and luxurious honeymoon experience in Sri Lanka’s finest resorts.",
  },
  {
    title: "Adventure & Trekking Tour",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/adventure-tour.jpg",
    duration: "10 Days / 9 Nights",
    price: "$1400",
    description: "Embark on thrilling trekking adventures and outdoor activities in Sri Lanka.",
  },
];

const ToursPage = () => {
  return (
    <div className="tours-container">
      <h1 className="tours-title">Our Tour Packages</h1>
      <p className="tours-subtitle">
        Choose from a variety of amazing tour packages that suit your preferences and budget.
      </p>

      <div className="tours-grid">
        {tours.map((tour, index) => (
          <div key={index} className="tour-card">
            <img src={tour.image} alt={tour.title} className="tour-image" />
            <div className="tour-content">
              <h2 className="tour-title">{tour.title}</h2>
              <p className="tour-duration"><strong>Duration:</strong> {tour.duration}</p>
              <p className="tour-price"><strong>Price:</strong> {tour.price}</p>
              <p className="tour-description">{tour.description}</p>
              <button className="tour-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToursPage;
