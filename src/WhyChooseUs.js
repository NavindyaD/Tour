import React from "react";
import "./WhyChooseUs.css"; // Import CSS

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "🌍",
      text: "We are one of the top destination management companies in Sri Lanka.",
    },
    {
      icon: "🚶‍♂️",
      text: "We are one of the leading tour operators in Sri Lanka.",
    },
    {
      icon: "🎒",
      text: "We offer a complete travel package to travelers and travel agents.",
    },
    {
      icon: "💬",
      text: "We have a passionate and professional team of 40 representatives with extensive knowledge of Sri Lanka tourism.",
    },
    {
      icon: "🕒",
      text: "We are one of the leading travel agents in Sri Lanka.",
    },
    {
      icon: "🧑‍🤝‍🧑",
      text: "We provide custom-made & specialized tours to our clients.",
    },
    {
      icon: "💲",
      text: "We are a leading travel agent in Sri Lanka who provides tours and holiday packages to exotic destinations.",
    },
    {
      icon: "📞",
      text: "We offer 24/7 customer support to our clients.",
    },
  ];

  return (
    <div className="why-choose-us">
      <h2>Why Choose Us</h2>
      <p>
        A number of people have chosen us as their number one travel destination
        management company, and you will also choose us for the following
        reasons.
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
        <a href="https://hello">READ MORE</a>
      </div>
    </div>
  );
};

export default WhyChooseUs;
