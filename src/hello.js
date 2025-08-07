import React from "react";
import "./Itinerary.css";
import bentota from './bentota.jpg';
import madu from './madu.jpg';
import turtle from './turtle.jpg';
import lotus from './lotus.jpg'
const Hello = () => {
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
                Madu ganga flows across Balapitiya (pprox.. 80kms down south of Colombo) and is
                one of the rarely visited, unspoiled attractions any nature lover can find in Sri Lanka.
                She boasts of having a cluster of 64 small islands scattered along her path and the
                most of which are covered with mangroves and uninhabited. The largest island is
                known as “Ma Doowa” is the largest inhabited island within the country where about
                300 families live. The smallest islet of the lot is called “Satha Paha Doowa” where
                there is a tiny shrine with a statue built in respect of the gods of Kataragama.
              </p>
                           <img
  src={madu}
  alt="Leisure at Hotel"
  style={{ width: "50%", margin: "1rem 0", borderRadius: "8px" }}
/>
              <p><strong>Kosgoda Sea Turtle Conservation Project (“KSTCP”)</strong></p>
              <p>
                Dudley Perera’s project has been underway since 1988. The main aim of the project
                is to monitor local sea turtle activity and conserve the local nesting sites. We aim to
                make the public more aware of how endangered these beautiful creatures are and
                just how important it is to help protect them before it is too late. One of the most
                important activities of the project is its hatchery. Within the sanctuary of the project,
                collected and rescued eggs can hatch safely away from predators before being
                released into the sea at night-time. In addition, a certain number from each hatching
                are kept back for a short period for ‘head starting’ before release. The hatchery
                program is designed to maximize the number of hatchlings reaching the sea and
                surviving through the critical stages of their early life. Only a few hatchlings from
                each batch will ever make it to adulthood. Therefore, every nest-ground, every egg,
                every hatchling and every turtle is crucial to the survival of the species.
                Unfortunately, sea turtles face many dangers.
              </p>
                           <img
  src={turtle}
  alt="Leisure at Hotel"
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
      The largest city and commercial capital of Sri Lanka is Colombo which is located in
      the western province adjacent to Sri Jayewardenepura Kotte (the capital city of Sri
      Lanka). Colombo is a vibrant city with a mixture of modern life, colonial buildings and
      ruins.
    </p>
    <p>
      Due to its very large harbor and its position along the East-West Sea trade routes,
      Colombo was very popular among ancient traders 2000 years ago.
    </p>
    <p>
      Colombo houses a majority of the Sri Lanka’s corporate offices, restaurants and
      entertainment venues. Famous land marks in Colombo include the National
      Museum, World Trade Center, Vihara Maha Devi Park and the Galle Face Green.
    </p>
               <img
  src={lotus}
  alt="Leisure at Hotel"
  style={{ width: "50%", margin: "1rem 0", borderRadius: "8px" }}
/>
  </td>
</tr>

        </tbody>
      </table>
    </div>
  );
};

export default Hello;
