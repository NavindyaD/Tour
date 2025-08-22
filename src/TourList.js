import React from "react";
import TourCard from "./TourCard";
import "./TourList.css";
import snorkelingImg from './colombo.jpg';
import sea from './sea.jpg'
const tourData = [
  {
    title: "5-Days Budget Pack (Highlights of Sri Lanka)",
    country: "Sri Lanka",
    price: 650,
    duration: 5,
    tags: ["Budget", "Highlights", "Culture", "History", "Nature"],
    image: sea,
  },
  {
    title: "3-Day Colombo City Experience",
  country: "Sri Lanka",
  price: 350, // example price in USD
  duration: 3, // days
  tags: ["City Tour", "Culture", "Shopping", "Luxury Hotels", "Sightseeing"],
  image: snorkelingImg,
  },
  {
    title: "Family Trip to Sri Lanka",
    country: "Sri Lanka",
    price: 850,
    duration: 9,
    tags: ["Wild Life", "Nature", "Culture", "History"],
    image: "https://source.unsplash.com/400x250/?family,travel",
  },
  {
    title: "Best of Sri Lanka",
    country: "Sri Lanka",
    price: 1250,
    duration: 12,
    tags: ["Beach", "Wild Life", "Nature", "Culture"],
    image: "https://source.unsplash.com/400x250/?beach,resort",
  },
  {
    title: "Romantic Getaway in Sri Lanka",
    country: "Sri Lanka",
    price: 1700,
    duration: 15,
    tags: ["Nature", "Beach", "Wild Life", "History"],
    image: "https://source.unsplash.com/400x250/?romantic,couple",
  },

];

const TourList = () => {
  return (
    <div className="tour-list">
      {tourData.map((tour, index) => (
        <TourCard key={index} {...tour} />
      ))}
    </div>
  );
};

export default TourList;
