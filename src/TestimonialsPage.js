import React from "react";
import "./TestimonialsPage.css";
import { useTranslation } from "./hooks/useTranslation";
import john from "./john.jpg";
import ema from "./ema.jpg";
import car from "./Carlos.jpg";
import lee from "./lee.jpg";

const TestimonialsPage = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      name: "John Doe",
      location: "United States",
      image: john,
      review: t.johnReview,
    },
    {
      name: "Emma Smith",
      location: "United Kingdom",
      image: ema,
      review: t.emmaReview,
    },
    {
      name: "Carlos Garcia",
      location: "Spain",
      image: car,
      review: t.carlosReview,
    },
    {
      name: "Sophia Lee",
      location: "Australia",
      image: lee,
      review: t.sophiaReview,
    },
  ];
  
  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">{t.customerReviewsTitle}</h1>
      <p className="testimonials-subtitle">{t.customerReviewsSubtitle}</p>

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
