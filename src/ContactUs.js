import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      
      <div className="contact-content">
        {/* Left Side - Contact Information */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>We're here to help you. Feel free to reach out to us through any of the channels below.</p>

          <div className="contact-details">
            <p><strong>📍 Address:</strong> 123 Travel Street, Colombo, Sri Lanka</p>
            <p><strong>📞 Phone:</strong> +94 123 456 789</p>
            <p><strong>✉ Email:</strong> info@olankatravels.com</p>
            <p><strong>🕘 Hours:</strong> Mon - Fri: 9 AM - 6 PM</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <div className="input-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="map-container">
        <iframe 
          title="Olanka Travels Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.842582086295!2d79.86075381535404!3d6.914743595007997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259287645645b%3A0x2e1e8b1188d8f95!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1630936359083!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
