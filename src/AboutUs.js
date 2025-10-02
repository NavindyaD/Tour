import React from "react";
import "./AboutUs.css";
import { useTranslation } from "./hooks/useTranslation";
import personalized from "./Personalized Travel Planning.jpg";
import customer from "./customer.jpg";
import desti from "./desti.jpg";
import price from "./price.png";
import lux from "./lux.jpg";
import guide from "./guide.jpg";

const WhyHERE = () => {
  const { t } = useTranslation();
  
  const whyChooseUs = [
    {
      title: t.personalizedTitle,
      image: personalized,
      description: t.personalizedDesc,
    },
    {
      title: t.customerSupportTitle,
      image: customer,
      description: t.customerSupportDesc,
    },
    {
      title: t.destinationsTitle,
      image: desti,
      description: t.destinationsDesc,
    },
    {
      title: t.priceGuaranteeTitle,
      image: price,
      description: t.priceGuaranteeDesc,
    },
    {
      title: t.luxuryTitle,
      image: lux,
      description: t.luxuryDesc,
    },
    {
      title: t.guidesTitle,
      image: guide,
      description: t.guidesDesc,
    },
  ];

  return (
    <div className="why-container">
      <h1 className="why-title">{t.whyChooseTitle}</h1>
      <p className="why-subtitle">
        {t.whyChooseSubtitle}
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
