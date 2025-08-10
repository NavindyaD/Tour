import React from "react";
import "./TestimonialsPage.css";
import john from "./john.jpg";
import ema from "./ema.jpg";
import car from "./Carlos.jpg";
import lee from "./lee.jpg";



const testimonials = [
  {
    name: "John Doe",
    location: "United States",
    image: john,
    review: "Our trip to Sri Lanka was absolutely fantastic! The planning and organization were perfect, and we felt well taken care of throughout the journey. Highly recommend HERE Travels!",
  },
  {
    name: "Emma Smith",
    location: "United Kingdom",
    image: ema,
    review: "A truly memorable experience! From the beautiful beaches to the stunning cultural sites, everything was perfectly planned. Can't wait to visit again!",
  },
  {
    name: "Carlos Garcia",
    location: "Spain",
    image: car,
    review: "The best travel agency I've ever booked with! Everything was well organized, and the guides were knowledgeable and friendly. Thank you for an amazing experience!",
  },
  {
    name: "Sophia Lee",
    location: "Australia",
    image: lee,
    review: "A seamless and unforgettable trip! The team was professional, and the itinerary was well thought out. I highly recommend HERE Travels to anyone visiting Sri Lanka.",
  },
];

const TestimonialsPage = () => {
  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">What Our Clients Say</h1>
      <p className="testimonials-subtitle">Real experiences from happy travelers around the world.</p>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-content">
              <p className="testimonial-review">"{testimonial.review}"</p>
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-location">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
