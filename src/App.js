import "./styles.css";
import react, { useState } from "react";

const destinations = {
  italy: [
    {
      name: "Rome",
      famousFor: "Rich history, stunning architecture, iconic landmarks",
      ratings: "4.5 - 5 stars"
    },
    {
      name: "Venice",
      famousFor: "Romantic canals, historic bridges, beautiful architecture",
      ratings: "4 - 4.5 stars"
    },
    {
      name: "Florence",
      famousFor: "Birthplace of the Renaissance, art, museums",
      ratings: "4.5 - 5 stars"
    }
  ],
  japan: [
    {
      name: "Tokyo",
      famousFor: "Bustling metropolis, technology, historic temples",
      ratings: "4 - 4.5 stars"
    },
    {
      name: "Kyoto",
      famousFor: "Traditional architecture, stunning temples, geisha districts",
      ratings: "4.5 - 5 stars"
    },
    {
      name: "Osaka",
      famousFor:
        "Vibrant street food culture, modern architecture, attractions",
      ratings: "4 - 4.5 stars"
    }
  ],
  france: [
    {
      name: "Paris",
      famousFor: "Romantic ambiance, iconic landmarks, cuisine",
      ratings: "4.5 - 5 stars"
    },
    {
      name: "Provence",
      famousFor: "Lavender fields, charming villages, outdoor markets",
      ratings: "4 - 4.5 stars"
    },
    {
      name: "The French Riviera (Côte d'Azur)",
      famousFor: "Glamorous Mediterranean coastline, luxurious resorts",
      ratings: "4 - 4.5 stars"
    }
  ]
};
var country = Object.keys(destinations);

export default function App() {
  const [place, setplace] = useState("japan");
  function clickHandler(countryName) {
    setplace(countryName);
  }
  return (
    <div className="App">
      <h1 className="heading">Hello Traveller</h1>
      <h2 className="heading-2">
        Discover your next adventure with our curated list of breathtaking
        travel destinations waiting to be explored.
      </h2>
      {country.map((place) => (
        <button onClick={() => clickHandler(place)}>travel {place}</button>
      ))}
      <div>
        <ul>
          {destinations[place].map((city) => (
            <li key={city.name}>
              <span className="city"> {city.name} </span>
              is Famous For {city.famousFor}. our Ratings are{" "}
              <span className="rating"> {city.ratings} </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
