import React from "react";
import "./WhyChooseUs.css";
import { useTranslation } from "./hooks/useTranslation";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: "🌍",
      text: t.whyChooseUsReason1,
    },
    {
      icon: "🚶‍♂️",
      text: t.whyChooseUsReason2,
    },
    {
      icon: "🎒",
      text: t.whyChooseUsReason3,
    },
    {
      icon: "💬",
      text: t.whyChooseUsReason4,
    },
    {
      icon: "🕒",
      text: t.whyChooseUsReason5,
    },
    {
      icon: "🧑‍🤝‍🧑",
      text: t.whyChooseUsReason6,
    },
    {
      icon: "💲",
      text: t.whyChooseUsReason7,
    },
    {
      icon: "📞",
      text: t.whyChooseUsReason8,
    },
  ];

  return (
    <div className="why-choose-us">
      <h2>{t.whyChooseUsTitle}</h2>
      <p>
        {t.whyChooseUsSubtitle}
      </p>

      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-item">
            <span className="icon">{reason.icon}</span>
            <p>{reason.text}</p>
          </div>
        ))}
      </div>

      <div className="read-more">
        <a href="https://hello">{t.readMore}</a>
      </div>
    </div>
  );
};

export default WhyChooseUs;
