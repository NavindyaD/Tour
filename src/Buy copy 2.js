import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    <div style={styles.formGroup}>
      <label style={styles.label}>{label}</label>
      <div ref={containerRef} style={styles.selectWrapper}>
        <input
          type="text"
          readOnly
          value={value ? String(value) : ''}
          placeholder={placeholder}
          onClick={() => setOpen((prev) => !prev)}
          style={styles.input}
          required
          aria-haspopup="listbox"
          aria-expanded={open}
        />
        {open && (
          <div style={styles.dropdown} role="listbox" aria-label={label}>
            {options.map((n) => (
              <label key={`${name}-${n}`} style={styles.dropdownOption}>
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
      alert('Return date must be after departure date.');
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
          alert('Thank you! Your booking request has been sent successfully.');
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
          alert('Oops! Something went wrong. Please try again later.');
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <section style={styles.container} aria-label="Tour Booking Form">
      <h1 style={styles.heading}>Book Your Tour</h1>
      <p style={styles.subtitle}>Complete your booking by filling out the form below.</p>

      <form onSubmit={handleSubmit} style={styles.form} noValidate>
        <div style={styles.rowGroup}>
          <div style={styles.halfWidth}>
            <label htmlFor="title" style={styles.label}>Title</label>
            <select
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={styles.input}
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
          <div style={styles.halfWidth}>
            <label htmlFor="name" style={styles.label}>Full Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              style={styles.input}
              aria-required="true"
            />
          </div>
        </div>

        <div style={styles.rowGroup}>
          <div style={styles.halfWidth}>
            <label htmlFor="departureDate" style={styles.label}>Departure Date</label>
            <input
              id="departureDate"
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
              style={styles.input}
              aria-required="true"
            />
          </div>
          <div style={styles.halfWidth}>
            <label htmlFor="returnDate" style={styles.label}>Return Date</label>
            <input
              id="returnDate"
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              required
              style={styles.input}
              aria-required="true"
            />
          </div>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="phone" style={styles.label}>Phone Number</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 123 456 7890"
            required
            pattern="^\+?[0-9\s\-()]{7,}$"
            title="Please enter a valid phone number"
            style={styles.input}
            aria-required="true"
          />
          <small style={styles.helperText}>Include country code, e.g., +1 123 456 7890</small>
        </div>

        <div style={styles.rowGroup}>
          <div style={styles.halfWidth}>
            <RadioDropdown
              label="Number of Adults"
              name="adults"
              value={adults}
              onChange={setAdults}
              options={[1, 2, 3, 4, 5, 6]}
              placeholder="Select adults"
            />
          </div>
          <div style={styles.halfWidth}>
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

        <div style={styles.formGroup}>
          <RadioDropdown
            label="Number of Rooms"
            name="rooms"
            value={rooms}
            onChange={setRooms}
            options={[1, 2, 3, 4, 5]}
            placeholder="Select rooms"
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Your Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your travel preferences, special requests, or any additional information..."
            rows="4"
            style={styles.textarea}
            aria-describedby="message-help"
          />
          <small id="message-help" style={styles.helperText}>
            Optional: Share any special requirements or preferences for your tour
          </small>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={loading ? styles.buttonDisabled : styles.button}
          aria-busy={loading}
        >
          {loading ? 'Sending...' : 'Submit Booking'}
        </button>
      </form>
    </section>
  );
};

const styles = {
  container: {
    maxWidth: '450px',
    margin: '2rem auto',
    padding: '1.5rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f0f4ff',
    borderRadius: '8px',
    boxShadow: '0 2px 12px rgba(0, 67, 148, 0.15)',
  },
  heading: {
    textAlign: 'center',
    color: '#0d47a1',
    marginBottom: '0.25rem',
  },
  subtitle: {
    textAlign: 'center',
    color: '#1976d2',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowGroup: {
    display: 'flex',
    gap: '1rem',
  },
  halfWidth: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: '#1565c0',
  },
  input: {
    padding: '0.6rem 0.8rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #90caf9',
    transition: 'border-color 0.2s ease-in-out',
  },
  selectWrapper: {
    position: 'relative',
  },
  helperText: {
    fontSize: '0.8rem',
    color: '#64b5f6',
    marginTop: '0.25rem',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#fff',
    backgroundColor: '#1565c0',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonDisabled: {
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#fff',
    backgroundColor: '#90a4ae',
    border: 'none',
    borderRadius: '5px',
    cursor: 'not-allowed',
  },
  fieldset: {
    border: 'none',
    margin: 0,
    padding: 0,
  },
  dropdown: {
    position: 'absolute',
    zIndex: 10,
    top: 'calc(100% + 4px)',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    border: '1px solid #90caf9',
    borderRadius: '6px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    padding: '0.5rem',
    maxHeight: '220px',
    overflowY: 'auto',
  },
  dropdownOption: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.4rem 0.25rem',
    cursor: 'pointer',
  },
  radioGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  radioOption: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    padding: '0.4rem 0.6rem',
    border: '1px solid #90caf9',
    borderRadius: '16px',
    cursor: 'pointer',
    userSelect: 'none',
  },
  textarea: {
    padding: '0.6rem 0.8rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #90caf9',
    transition: 'border-color 0.2s ease-in-out',
    resize: 'vertical',
    minHeight: '80px',
  },
};

export default Buy;
