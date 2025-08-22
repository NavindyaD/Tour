import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Buy.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

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

  // Updated bot configuration - PLEASE UPDATE THESE VALUES
  const BOT_TOKEN = '8079018314:AAGwVeXMJJZwtwGfksvK2daTTWYGYmgrivo'; // Your new bot token
  const CHAT_ID = '-4883974617'; // Group chat ID

  // Function to get your chat ID - send a message to your bot first, then click this button
  const getChatId = async () => {
    if (BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE') {
      alert('⚠️ Bot token not configured!');
      return;
    }

    try {
      // First, let's get updates to see recent messages
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`);
      const data = await response.json();
      
      console.log('Bot updates:', data);
      
      if (data.ok && data.result.length > 0) {
        const lastMessage = data.result[data.result.length - 1];
        const chatId = lastMessage.message?.chat?.id;
        const chatType = lastMessage.message?.chat?.type; // 'private', 'group', 'supergroup'
        const chatTitle = lastMessage.message?.chat?.title || 'Private Chat';
        
        if (chatId) {
          const chatInfo = `Chat Type: ${chatType}\nChat Title: ${chatTitle}\nChat ID: ${chatId}`;
          alert(`✅ Chat Information:\n\n${chatInfo}\n\nPlease update the CHAT_ID constant in the code with this value.`);
          console.log('Found Chat Info:', { chatId, chatType, chatTitle });
        } else {
          alert('❌ No chat ID found. Please send a message to your bot first, then try again.');
        }
      } else {
        alert('❌ No messages found. Please send a message to your bot first, then try again.');
      }
    } catch (error) {
      alert('❌ Error getting chat ID: ' + error.message);
      console.error('Error:', error);
    }
  };

  // Function to get all available chats (groups, channels, private chats)
  const getAllChats = async () => {
    if (BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE') {
      alert('⚠️ Bot token not configured!');
      return;
    }

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`);
      const data = await response.json();
      
      console.log('All bot updates:', data);
      
      if (data.ok && data.result.length > 0) {
        const chats = data.result.map(update => {
          if (update.message) {
            return {
              chatId: update.message.chat.id,
              chatType: update.message.chat.type,
              chatTitle: update.message.chat.title || update.message.chat.first_name || 'Unknown',
              lastMessage: update.message.text || 'No text'
            };
          }
          return null;
        }).filter(Boolean);

        // Remove duplicates based on chatId
        const uniqueChats = chats.filter((chat, index, self) => 
          index === self.findIndex(c => c.chatId === chat.chatId)
        );

        if (uniqueChats.length > 0) {
          const chatList = uniqueChats.map(chat => 
            `${chat.chatType.toUpperCase()}: ${chat.chatTitle}\nChat ID: ${chat.chatId}\n`
          ).join('\n');
          
          alert(`📋 Available Chats:\n\n${chatList}\n\nCopy the Chat ID you want to use and update the CHAT_ID constant.`);
          console.log('Available chats:', uniqueChats);
        } else {
          alert('❌ No chats found. Please send messages to your bot first, then try again.');
        }
      } else {
        alert('❌ No messages found. Please send a message to your bot first, then try again.');
      }
    } catch (error) {
      alert('❌ Error getting chats: ' + error.message);
      console.error('Error:', error);
    }
  };

  // Test function to verify bot setup
  const testTelegramBot = async () => {
    if (BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE' || CHAT_ID === 'YOUR_CHAT_ID_HERE') {
      alert('⚠️ Please update the bot token and chat ID in the code first!');
      return;
    }

    const testMessage = '🧪 *BOT TEST MESSAGE* 🧪\n\nThis is a test message to verify your bot is working correctly!\n\nTime: ' + new Date().toLocaleString();
    
    console.log('Testing Telegram bot...');
    console.log('Bot Token:', BOT_TOKEN);
    console.log('Chat ID:', CHAT_ID);
    
    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: testMessage,
          parse_mode: 'Markdown'
        })
      });
      
      const data = await response.json();
      console.log('Test Response:', data);
      
      if (data.ok) {
        alert('✅ Bot test successful! Check your Telegram for the test message.');
      } else {
        alert(`❌ Bot test failed: ${data.description || 'Unknown error'}`);
        console.error('Test failed:', data);
      }
    } catch (error) {
      alert('❌ Bot test failed: Network error');
      console.error('Test error:', error);
    }
  };

  // Function to send message to Telegram
  const sendTelegramMessage = async (messageText) => {
    if (BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE' || CHAT_ID === 'YOUR_CHAT_ID_HERE') {
      console.warn('Telegram bot not configured, skipping Telegram message');
      return false;
    }

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: messageText,
          parse_mode: 'Markdown'
        })
      });
      
      const data = await response.json();
      
      if (data.ok) {
        console.log('Telegram message sent successfully');
        return true;
      } else {
        console.error('Telegram API Error:', data);
        return false;
      }
    } catch (error) {
      console.error('Telegram API Network Error:', error);
      return false;
    }
  };

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
        async () => {
          setLoading(false);
          
          // Prepare Telegram message
          const telegramMessage = `🚀 *NEW TOUR BOOKING REQUEST* 🚀

👤 *Customer Details:*
• Title: ${title}
• Name: ${name}
• Phone: ${phone}

📅 *Travel Dates:*
• Arrival: ${departureDate}
• Departure: ${returnDate}

👥 *Group Size:*
• Adults: ${adults}
• Children: ${children || 0}
• Rooms: ${rooms}

💬 *Message:*
${message || 'No additional message'}

⏰ *Requested at:* ${new Date().toLocaleString()}

Please contact me to confirm this booking! 🙏`;

          // Send to Telegram
          const telegramSuccess = await sendTelegramMessage(telegramMessage);
          
          if (telegramSuccess) {
            alert('Thank you! Your booking request has been sent successfully via email and Telegram.');
          } else {
            alert('Thank you! Your booking request has been sent via email. There was an issue sending to Telegram, but your request has been received.');
          }
          
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
            <label htmlFor="departureDate" className="buy-label">Arrival Date</label>
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
            <label htmlFor="returnDate" className="buy-label">Departure Date</label>
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
          <PhoneInput
            id="phone"
            name="phone"
            international
            defaultCountry="LK"
            value={phone}
            onChange={(value) => setPhone(value || '')}
            aria-required="true"
          />
          <small className="buy-helper-text">Include your country code if outside Sri Lanka</small>
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
