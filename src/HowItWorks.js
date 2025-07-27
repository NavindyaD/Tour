import React from "react";
import "./HowItWorks.css"; // Unique CSS file
import { FaPhone, FaHeadset, FaFileInvoiceDollar, FaHandshake } from "react-icons/fa"; // Import icons

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaPhone />,
      title: "Enquire Now",
      time: "5 Minutes",
      description: [
        "Filling the web form",
        "Web live chat",
        "Email",
        "Call us",
      ],
    },
    {
      icon: <FaHeadset />,
      title: "Connect Travel Expert",
      time: "30 Minutes",
      description: [
        "Discuss your requirement",
        "Free expert travel advice",
      ],
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Received 3 Travel Options",
      time: "24/7 Support",
      description: [
        "Discuss changes",
        "Finalise trip plan",
        "Pay 10%",
      ],
    },
    {
      icon: <FaHandshake />,
      title: "Receive Your Trip Confirmation",
      time: "",
      description: [
        "Filling the web form",
        "100% satisfaction guaranteed",
      ],
    },
  ];

  return (
    <div className="howitworks-container">
      <h2 className="howitworks-title">HOW IT WORKS?</h2>
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
