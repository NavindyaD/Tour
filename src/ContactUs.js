import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch with HERE Travels</h1>

      <div className="contact-content">
        {/* Contact Info Section */}
        <div className="contact-info">
          <h2>We'd Love to Hear From You</h2>
          <p>
            Whether you have a question about our tours, pricing, or anything
            else, our team is ready to answer all your questions.
          </p>

          <div className="contact-details">
            <p><strong>📍 Office:</strong> 123 Travel Street, Colombo, Sri Lanka</p>
            <p><strong>📞 Phone:</strong> +94 77 028 2915</p>
            <p><strong>📞 Support:</strong> +94 75 216 7167</p>
            <p><strong>✉ Email:</strong> info@heretravels.com</p>
            <p><strong>🕘 Working Hours:</strong> Monday – Friday: 9:00 AM – 6:00 PM</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="How can we help you?" rows="5" required></textarea>
            </div>
            <button type="submit">Submit Inquiry</button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          title="HERE Travels Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.842582086295!2d79.86075381535404!3d6.914743595007997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259287645645b%3A0x2e1e8b1188d8f95!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1630936359083!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
