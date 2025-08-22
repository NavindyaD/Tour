import React, { useState } from "react";
import "./ContactUs.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', phone: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneClick = (phoneNumber) => {
    // Open phone app on mobile devices
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = (email) => {
    // Open email app
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch with Sri Yatra Travels</h1>

      <div className="contact-content">
        {/* Contact Info Section */}
        <div className="contact-info">
          <h2>We'd Love to Hear From You</h2>
          <p>
            Whether you have a question about our tours, pricing, or anything
            else, our team is ready to answer all your questions.
          </p>

          <div className="contact-details">
            <p>
              <strong>📍 Office:</strong> 
              <span className="contact-detail-text">Watabage Junction, Panadura, Sri Lanka</span>
            </p>
            <p>
              <strong>📞 Phone:</strong> 
              <button 
                className="contact-link-button"
                onClick={() => handlePhoneClick('+94770282915')}
                aria-label="Call +94 77 028 2915"
              >
                +94 77 028 2915
              </button>
            </p>
            <p>
              <strong>📞 Support:</strong> 
              <button 
                className="contact-link-button"
                onClick={() => handlePhoneClick('+94752167167')}
                aria-label="Call +94 75 216 7167"
              >
                +94 75 216 7167
              </button>
            </p>
            <p>
              <strong>✉ Email:</strong> 
              <button 
                className="contact-link-button"
                onClick={() => handleEmailClick('info@heretravels.com')}
                aria-label="Send email to info@heretravels.com"
              >
                info@heretravels.com
              </button>
            </p>
            <p>
              <strong>🕘 Working Hours:</strong> 
              <span className="contact-detail-text">Monday – Friday: 9:00 AM – 6:00 PM</span>
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="input-group">
              <label htmlFor="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name" 
                required 
                aria-required="true"
                aria-describedby="name-error"
              />
              {submitStatus === 'error' && !formData.name && (
                <span id="name-error" className="error-message">Name is required</span>
              )}
            </div>
            
            <div className="input-group">
              <label htmlFor="email">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com" 
                required 
                aria-required="true"
                aria-describedby="email-error"
              />
              {submitStatus === 'error' && !formData.email && (
                <span id="email-error" className="error-message">Valid email is required</span>
              )}
            </div>
            
            <div className="input-group">
              <label htmlFor="phone">Phone Number *</label>
              <PhoneInput
                id="phone"
                name="phone"
                international
                defaultCountry="LK"
                value={formData.phone}
                onChange={(value) => setFormData(prev => ({ ...prev, phone: value || '' }))}
                aria-required="true"
                aria-describedby="phone-error"
              />
              {submitStatus === 'error' && !formData.phone && (
                <span id="phone-error" className="error-message">Phone number is required</span>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="message">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleInputChange}
                placeholder="How can we help you? Please share your questions or requirements..." 
                rows="5" 
                required
                aria-required="true"
                aria-describedby="message-error"
              ></textarea>
              {submitStatus === 'error' && !formData.message && (
                <span id="message-error" className="error-message">Message is required</span>
              )}
            </div>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="error-message">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          title="Sri Yatra Travels Location - Watabage Junction, Panadura, Sri Lanka"
          src="https://www.google.com/maps?q=Watabage+Junction,+Panadura,+Sri+Lanka&output=embed"
          allowFullScreen=""
          loading="lazy"
          aria-label="Map showing Sri Yatra Travels office location at Watabage Junction, Panadura, Sri Lanka"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
