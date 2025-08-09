import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "./Itinerary.css";
import bentota from './bentota.jpg';
import madu from './madu.jpg';
import turtle from './turtle.jpg';
import lotus from './lotus.jpg';

const Hello = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleBookNow = () => {
    navigate("/buy"); // Navigate to /buy when button is clicked
  };

  return (
    <div className="itinerary-container">
      <h1>Sri Lanka Adventure Tour - Itinerary</h1>

      <table className="itinerary-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Day One: Airport – Bentota</strong></td>
            <td>
              <p>Meeting and Greeting at the Airport by MY HOLIDAY representative.</p>
              <p>Transfer from Airport to Hotel in Bentota</p>
              <p>Leisure at the Hotel</p>
              <img
                src={bentota}
                alt="Leisure at Hotel"
                style={{ width: "50%", margin: "1rem 0", borderRadius: "8px" }}
              />
              <p>Dinner and Overnight Stay at Bentota Hotel</p>
            </td>
          </tr>

          <tr>
            <td><strong>Day Two: Bentota</strong></td>
            <td>
              <p>Breakfast at the Hotel</p>
              <p><strong>Madu River Safari</strong></p>
              <p>
                Madu ganga flows across Balapitiya and is one of the rarely visited, unspoiled attractions.
              </p>
              <img
                src={madu}
                alt="Madu River Safari"
                style={{ width: "50%", margin: "1rem 0", borderRadius: "8px" }}
              />
              <p><strong>Kosgoda Sea Turtle Conservation Project (“KSTCP”)</strong></p>
              <p>
                The hatchery program is designed to maximize hatchling survival through their early life.
              </p>
              <img
                src={turtle}
                alt="Sea Turtle Conservation"
                style={{ width: "50%", margin: "1rem 0", borderRadius: "8px" }}
              />
            </td>
          </tr>

          <tr>
            <td><strong>Day Three: Bentota - Colombo</strong></td>
            <td>
              <p>Breakfast at the Hotel</p>
              <p>Transfer to Colombo</p>
              <p>Colombo city tour</p>
              <p>
                Colombo is a vibrant city with a mix of modern life, colonial buildings and ruins.
              </p>
              <img
                src={lotus}
                alt="Colombo City"
                style={{ width: "50%", margin: "1rem 0", borderRadius: "8px" }}
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Book Now Button */}
      <div className="book-now-container">
        <button className="book-now-button" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hello;
