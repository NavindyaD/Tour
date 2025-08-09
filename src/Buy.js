import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Buy = () => {
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (new Date(returnDate) <= new Date(departureDate)) {
      alert('Return date must be after departure date.');
      return;
    }

    setLoading(true);

    const templateParams = {
      departure_date: departureDate,
      return_date: returnDate,
      phone: phone,
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
          setDepartureDate('');
          setReturnDate('');
          setPhone('');
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
        <div style={styles.formGroup}>
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

        <div style={styles.formGroup}>
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
    backgroundColor: '#f0f4ff', // light blue background
    borderRadius: '8px',
    boxShadow: '0 2px 12px rgba(0, 67, 148, 0.15)', // subtle blue shadow
  },
  heading: {
    textAlign: 'center',
    color: '#0d47a1', // dark blue
    marginBottom: '0.25rem',
  },
  subtitle: {
    textAlign: 'center',
    color: '#1976d2', // medium blue
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
  label: {
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: '#1565c0', // blue label text
  },
  input: {
    padding: '0.6rem 0.8rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #90caf9', // light blue border
    transition: 'border-color 0.2s ease-in-out',
  },
  helperText: {
    fontSize: '0.8rem',
    color: '#64b5f6', // lighter blue
    marginTop: '0.25rem',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#fff',
    backgroundColor: '#1565c0', // strong blue
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
    backgroundColor: '#90a4ae', // grayish blue disabled
    border: 'none',
    borderRadius: '5px',
    cursor: 'not-allowed',
  },
};

export default Buy;
