import React from "react";
import TourCard from "./TourCard";
import "./TourList.css";
import snorkelingImg from './colombo.jpg';
import sea from './sea.jpg';
import classicImg from './classic.png';
import wildlifeImg from './wildlife.png';
import hillImg from './hill.png';
import beachImg from './beach.png';
import { useTranslation } from "./hooks/useTranslation";

const TourList = () => {
  const { t } = useTranslation();

  const tourData = [
    {
      title: t.completeSriLankaTitle,
      country: "Sri Lanka",
      price: 1850,
      duration: 14,
      tags: [t.completeSriLankaType, t.completeSriLankaHighlights, t.completeSriLankaCulture, t.completeSriLankaHistory, t.completeSriLankaNature, t.completeSriLankaBeach],
      image: classicImg,
    },
    {
      title: t.wildlifeCulturalTitle,
      country: "Sri Lanka",
      price: 1450,
      duration: 10,
      tags: [t.wildlifeCulturalType, t.wildlifeCulturalHighlights, t.wildlifeCulturalWildlife, t.wildlifeCulturalCulture, t.wildlifeCulturalHistory, t.wildlifeCulturalNature],
      image: wildlifeImg,
    },
    {
      title: t.hillCountryBeachTitle,
      country: "Sri Lanka",
      price: 1200,
      duration: 8,
      tags: [t.hillCountryBeachType, t.hillCountryBeachHighlights, t.hillCountryBeachNature, t.hillCountryBeachBeach, t.hillCountryBeachCulture, t.hillCountryBeachAdventure],
      image: hillImg,
    },
    {
      title: t.culturalTriangleBeachTitle,
      country: "Sri Lanka",
      price: 950,
      duration: 6,
      tags: [t.culturalTriangleBeachType, t.culturalTriangleBeachHighlights, t.culturalTriangleBeachCulture, t.culturalTriangleBeachHistory, t.culturalTriangleBeachBeach, t.culturalTriangleBeachRelaxation],
      image: beachImg,
    },
    {
      title: t.fiveDayBudgetPackTitle,
      country: "Sri Lanka",
      price: 650,
      duration: 5,
      tags: [t.fiveDayBudgetPackType, t.fiveDayBudgetPackHighlights, t.fiveDayBudgetPackCulture, t.fiveDayBudgetPackHistory, t.fiveDayBudgetPackNature],
      image: sea,
    },
    {
      title: t.threeDayColomboCityTitle,
      country: "Sri Lanka",
      price: 350,
      duration: 3,
      tags: [t.threeDayColomboCityType, t.threeDayColomboCityCulture, t.threeDayColomboCityShopping, t.threeDayColomboCityLuxury, t.threeDayColomboCitySightseeing],
      image: snorkelingImg,
    },
    {
      title: t.familyTripTitle,
      country: "Sri Lanka",
      price: 850,
      duration: 9,
      tags: [t.familyTripWildlife, t.familyTripNature, t.familyTripCulture, t.familyTripHistory],
      image: "https://source.unsplash.com/400x250/?family,travel",
    },
    {
      title: t.bestOfSriLankaTitle,
      country: "Sri Lanka",
      price: 1250,
      duration: 12,
      tags: [t.bestOfSriLankaBeach, t.bestOfSriLankaWildlife, t.bestOfSriLankaNature, t.bestOfSriLankaCulture],
      image: "https://source.unsplash.com/400x250/?beach,resort",
    },
    {
      title: t.romanticGetawayTitle,
      country: "Sri Lanka",
      price: 1700,
      duration: 15,
      tags: [t.romanticGetawayNature, t.romanticGetawayBeach, t.romanticGetawayWildlife, t.romanticGetawayHistory],
      image: "https://source.unsplash.com/400x250/?romantic,couple",
    },
  ];

  return (
    <div className="tour-list">
      {tourData.slice(0, 4).map((tour, index) => (
        <TourCard key={index} {...tour} />
      ))}
    </div>
  );
};

export default TourList;
