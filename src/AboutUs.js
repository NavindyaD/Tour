import React from "react";
import "./AboutUs.css";

const whyChooseUs = [
  {
    title: "Personalized Travel Planning",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/travel-planning.jpg",
    description: "We tailor each journey to suit your unique needs, ensuring a one-of-a-kind travel experience.",
  },
  {
    title: "24/7 Customer Support",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/customer-support.jpg",
    description: "Our dedicated travel experts are available around the clock to assist you with any queries.",
  },
  {
    title: "Handpicked Destinations",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/destinations.jpg",
    description: "Explore the best destinations carefully selected to offer you unforgettable experiences.",
  },
  {
    title: "Best Price Guarantee",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/best-price.jpg",
    description: "We offer competitive prices without compromising on the quality of your travel experience.",
  },
  {
    title: "Luxury & Comfort",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/luxury-travel.jpg",
    description: "Enjoy luxurious accommodations and seamless travel arrangements for ultimate comfort.",
  },
  {
    title: "Expert Tour Guides",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/tour-guides.jpg",
    description: "Our knowledgeable and friendly guides ensure you make the most of your trip.",
  },
];

const WhyOlanka = () => {
  return (
    <div className="why-container">
      <h1 className="why-title">Why Choose Olanka Travels?</h1>
      <p className="why-subtitle">
        We are committed to providing you with the best travel experiences with exceptional service and personalized packages.
      </p>
      
      <div className="why-grid">
        {whyChooseUs.map((item, index) => (
          <div key={index} className="why-card">
            <img src={item.image} alt={item.title} className="why-image" />
            <h2 className="why-card-title">{item.title}</h2>
            <p className="why-card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyOlanka;
