import React, { useState } from "react";
import "./ContactUs.css";
import { useTranslation } from "./hooks/useTranslation";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactUs = () => {
  const { t } = useTranslation();
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
      <h1 className="contact-title">{t.getInTouchTitle}</h1>

      <div className="contact-content">
        {/* Contact Info Section */}
        <div className="contact-info">
          <h2>{t.loveToHearTitle}</h2>
          <p>
            {t.loveToHearDesc}
          </p>

          <div className="contact-details">
            <p>
              <strong>📍 {t.office}:</strong> 
              <span className="contact-detail-text">{t.officeAddress}</span>
            </p>
            <p>
              <strong>📞 {t.phone}:</strong> 
              <button 
                className="contact-link-button"
                onClick={() => handlePhoneClick('+94770282915')}
                aria-label={`Call ${t.phoneNumber}`}
              >
                {t.phoneNumber}
              </button>
            </p>
            <p>
              <strong>📞 {t.support}:</strong> 
              <button 
                className="contact-link-button"
                onClick={() => handlePhoneClick('+94752167167')}
                aria-label={`Call ${t.supportNumber}`}
              >
                {t.supportNumber}
              </button>
            </p>
            <p>
              <strong>✉ {t.email}:</strong> 
              <button 
                className="contact-link-button"
                onClick={() => handleEmailClick('info@heretravels.com')}
                aria-label={`Send email to ${t.emailAddress}`}
              >
                {t.emailAddress}
              </button>
            </p>
            <p>
              <strong>🕘 {t.workingHours}:</strong> 
              <span className="contact-detail-text">{t.workingHoursText}</span>
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <h2>{t.contactFormTitle}</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="input-group">
              <label htmlFor="name">{t.name} *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t.namePlaceholder} 
                required 
                aria-required="true"
                aria-describedby="name-error"
              />
              {submitStatus === 'error' && !formData.name && (
                <span id="name-error" className="error-message">{t.name} is required</span>
              )}
            </div>
            
            <div className="input-group">
              <label htmlFor="email">{t.email} *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t.emailPlaceholder} 
                required 
                aria-required="true"
                aria-describedby="email-error"
              />
              {submitStatus === 'error' && !formData.email && (
                <span id="email-error" className="error-message">Valid {t.email.toLowerCase()} is required</span>
              )}
            </div>
            
            <div className="input-group">
              <label htmlFor="phone">{t.phone} *</label>
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
                <span id="phone-error" className="error-message">{t.phone} is required</span>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="message">{t.message} *</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t.messagePlaceholder} 
                rows="5" 
                required
                aria-required="true"
                aria-describedby="message-error"
              ></textarea>
              {submitStatus === 'error' && !formData.message && (
                <span id="message-error" className="error-message">{t.message} is required</span>
              )}
            </div>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                {t.messageSent}
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="error-message">
                {t.messageError}
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? t.submitting : t.submitButton}
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
