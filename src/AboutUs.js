import React from "react";
import "./AboutUs.css";
import personalized from "./Personalized Travel Planning.jpg";
import customer from "./customer.jpg";
import desti from "./desti.jpg";
import price from "./price.png";
import lux from "./lux.jpg";
import guide from "./guide.jpg"
const whyChooseUs = [
  {
    title: "Personalized Travel Planning",
    image: personalized,
    description: "We tailor each journey to suit your unique needs, ensuring a one-of-a-kind travel experience.",
  },
  {
    title: "24/7 Customer Support",
    image: customer,
    description: "Our dedicated travel experts are available around the clock to assist you with any queries.",
  },
  {
    title: "Handpicked Destinations",
    image: desti,
    description: "Explore the best destinations carefully selected to offer you unforgettable experiences.",
  },
  {
    title: "Best Price Guarantee",
    image: price,
    description: "We offer competitive prices without compromising on the quality of your travel experience.",
  },
  {
    title: "Luxury & Comfort",
    image: lux,
    description: "Enjoy luxurious accommodations and seamless travel arrangements for ultimate comfort.",
  },
  {
    title: "Expert Tour Guides",
    image: guide,
    description: "Our knowledgeable and friendly guides ensure you make the most of your trip.",
  },
];

const WhyHERE = () => {
  return (
    <div className="why-container">
      <h1 className="why-title">Why Choose HERE Travels?</h1>
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

export default WhyHERE;
