import React from "react";
import "./HowItWorks.css"; // Unique CSS file
import { FaPhone, FaHeadset, FaFileInvoiceDollar, FaHandshake } from "react-icons/fa"; // Import icons
import { useTranslation } from "./hooks/useTranslation";

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <FaPhone />,
      title: t.step1Title,
      time: t.step1Time,
      description: [
        t.step1FillingForm,
        t.step1WebChat,
        t.step1Email,
        t.step1Call,
      ],
    },
    {
      icon: <FaHeadset />,
      title: t.step2Title,
      time: t.step2Time,
      description: [
        t.step2Discuss,
        t.step2FreeAdvice,
        t.step2Support,
      ],
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: t.step3Title,
      time: "",
      description: [
        t.step3Discuss,
        t.step3Finalise,
        t.step3Pay,
      ],
    },
    {
      icon: <FaHandshake />,
      title: t.step4Title,
      time: "",
      description: [
        t.step4FillingForm,
        t.step4Satisfaction,
      ],
    },
  ];

  return (
    <div className="howitworks-container">
      <h2 className="howitworks-title">{t.howItWorksTitle}</h2>
      <div className="howitworks-steps">
        {steps.map((step, index) => (
          <div key={index} className="howitworks-step">
            <div className="howitworks-icon">{step.icon}</div>
            {step.time && <p className="howitworks-time">{step.time}</p>}
            <h3 className="howitworks-step-title">
              {index + 1}. <strong>{step.title}</strong>
            </h3>
            <ul className="howitworks-list">
              {step.description.map((desc, idx) => (
                <li key={idx} className="howitworks-list-item">{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
