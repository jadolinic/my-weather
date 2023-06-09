import "./App.css";
import { useState } from "react";

function App() {
  const api = {
    key: "030715aa3f60613533c215ff8c44708e",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = (e) => {
    if (e.keyCode === 13) {
      fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((data) => data.json())
        .then((data) => {
          setWeather(data);
        });
    }
  };

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          placeholder="Search city"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onKeyDown={searchPressed}
        />
      </div>
      {typeof weather.main != "undefined" ? (
        <header className="container">
          <div className="top">
            <div className="location">
              <p>{weather.name}</p>
            </div>
            <div className="temperature">
              <h1>{weather.main.temp.toFixed()}°C</h1>
            </div>
            <div className="description">
              <p>{weather.weather[0].main}</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p className="bold">{weather.main.feels_like.toFixed()}°C</p>
              <p>Feels like</p>
            </div>
            <div className="humidity">
              <p className="bold">{weather.main.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className="bold">{weather.wind.speed.toFixed()}m/s</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </header>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
