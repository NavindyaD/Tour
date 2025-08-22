import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Buy.css';

const RadioDropdown = ({ label, name, value, onChange, options, placeholder }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div className="buy-form-group">
      <label className="buy-label">{label}</label>
      <div ref={containerRef} className="buy-select-wrapper">
        <input
          type="text"
          readOnly
          value={value ? String(value) : ''}
          placeholder={placeholder}
          onClick={() => setOpen((prev) => !prev)}
          className="buy-input"
          required
          aria-haspopup="listbox"
        />
        {open && (
          <div className="buy-dropdown" role="listbox" aria-label={label}>
            {options.map((n) => (
              <label key={`${name}-${n}`} className="buy-dropdown-option">
                <input
                  type="radio"
                  name={name}
                  value={String(n)}
                  checked={value === String(n)}
                  onChange={(e) => {
                    onChange(e.target.value);
                    setOpen(false);
                  }}
                />
                <span>{n}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Buy = () => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [phone, setPhone] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [rooms, setRooms] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (new Date(returnDate) <= new Date(departureDate)) {
      alert('Return date must be at least one day after departure date.');
      return;
    }

    if (!adults || !rooms || adults <= 0 || rooms <= 0) {
      alert('Please enter a valid number of adults and rooms.');
      return;
    }

    setLoading(true);

    const templateParams = {
      title: title,
      name: name,
      departure_date: departureDate,
      return_date: returnDate,
      phone: phone,
      adults: adults,
      children: children,
      rooms: rooms,
      message: message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        'service_6bbwg1o',
        'template_ergtged',
        templateParams,
        'n1caSqRqsuEpFT6aU'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you! Your booking request has been sent successfully via email and Telegram.');
          
          // Also send to Telegram
          const telegramMessage = `🚀 *NEW TOUR BOOKING REQUEST* 🚀

👤 *Customer Details:*
• Title: ${title}
• Name: ${name}
• Phone: ${phone}

📅 *Travel Dates:*
• Departure: ${departureDate}
• Return: ${returnDate}

👥 *Group Size:*
• Adults: ${adults}
• Children: ${children || 0}
• Rooms: ${rooms}

💬 *Message:*
${message || 'No additional message'}

⏰ *Requested at:* ${new Date().toLocaleString()}

Please contact me to confirm this booking! 🙏`;

          // Send to Telegram using bot API
          const botToken = '8494726599:AAE38axQj0u_5HdfYPowtCCPR1o1mI--zbw';
          const chatId = '7751266794';
          const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
          
          fetch(telegramUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: telegramMessage,
              parse_mode: 'Markdown'
            })
          })
          .then(response => response.json())
          .then(data => {
            if (data.ok) {
              console.log('Telegram message sent successfully');
            } else {
              console.error('Telegram error:', data);
            }
          })
          .catch(error => {
            console.error('Telegram API error:', error);
          });
          
          // Reset form
          setTitle('');
          setName('');
          setDepartureDate('');
          setReturnDate('');
          setPhone('');
          setAdults('');
          setChildren('');
          setRooms('');
          setMessage('');
        },
        (error) => {
          setLoading(false);
          alert('Oops! Something went wrong with email. Please try again later.');
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <section className="buy-container" aria-label="Tour Booking Form">
      <h1 className="buy-heading">Book Your Tour</h1>
      <p className="buy-subtitle">Complete your booking by filling out the form below.</p>

      <form onSubmit={handleSubmit} className="buy-form" noValidate>
        <div className="buy-row-group">
          <div className="buy-half-width">
            <label htmlFor="title" className="buy-label">Title</label>
            <select
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="buy-input"
              aria-required="true"
            >
              <option value="">Select title</option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Mrs">Mrs</option>
              <option value="Dr">Dr</option>
              <option value="Prof">Prof</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="buy-half-width">
            <label htmlFor="name" className="buy-label">Full Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="buy-input"
              aria-required="true"
            />
          </div>
        </div>

        <div className="buy-row-group">
          <div className="buy-half-width">
            <label htmlFor="departureDate" className="buy-label">Departure Date</label>
            <input
              id="departureDate"
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
              className="buy-input"
              aria-required="true"
            />
          </div>
          <div className="buy-half-width">
            <label htmlFor="returnDate" className="buy-label">Return Date</label>
            <input
              id="returnDate"
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              min={departureDate ? new Date(new Date(departureDate).getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0] : ''}
              required
              className="buy-input"
              aria-required="true"
            />
          </div>
        </div>

        <div className="buy-form-group">
          <label htmlFor="phone" className="buy-label">Phone Number</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 123 456 7890"
            required
            pattern="^\+?[0-9\s\-()]{7,}$"
            title="Please enter a valid phone number"
            className="buy-input"
            aria-required="true"
          />
          <small className="buy-helper-text">Include country code, e.g., +1 123 456 7890</small>
        </div>

        <div className="buy-row-group">
          <div className="buy-half-width">
            <RadioDropdown
              label="Number of Adults"
              name="adults"
              value={adults}
              onChange={setAdults}
              options={[1, 2, 3, 4, 5, 6]}
              placeholder="Select adults"
            />
          </div>
          <div className="buy-half-width">
            <RadioDropdown
              label="Number of Children"
              name="children"
              value={children}
              onChange={setChildren}
              options={[0, 1, 2, 3, 4, 5, 6]}
              placeholder="Select children"
            />
          </div>
        </div>

        <div className="buy-form-group">
          <RadioDropdown
            label="Number of Rooms"
            name="rooms"
            value={rooms}
            onChange={setRooms}
            options={[1, 2, 3, 4, 5]}
            placeholder="Select rooms"
          />
        </div>

        <div className="buy-form-group">
          <label htmlFor="message" className="buy-label">Your Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your travel preferences, special requests, or any additional information..."
            rows="4"
            className="buy-textarea"
            aria-describedby="message-help"
          />
          <small id="message-help" className="buy-helper-text">
            Optional: Share any special requirements or preferences for your tour
          </small>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="buy-button"
          aria-busy={loading}
        >
          {loading ? 'Sending...' : 'Submit Booking'}
        </button>
      </form>
    </section>
  );
};

export default Buy;
