import "./App.css";
import { useState } from "react";

function App() {
  const api = {
    key: "030715aa3f60613533c215ff8c44708e",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((data) => data.json())
      .then((data) => {
        setWeather(data);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Header */}

        <h1>My weather App</h1>

        {/* Search field */}

        <div>
          <input
            type="text"
            placeholder="search city"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {/*Fixing error 404 (page not found)*/}
        
        {typeof weather.main != "undefined" ? (
          <div>
            {/* Location */}

            <p>{weather.name}</p>

            {/* Temperature */}

            <p>{weather.main.temp}°C</p>

            {/* Weather Conditions */}

            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : 
          ""
        }
      </header>
    </div>
  );
}

export default App;
