import { useState, React } from "react";
import { result } from "lodash";

const api = {
  key: "51e464ca4cdfb256e268caccccef8edf",
  base: "http://api.openweathermap.org/data/2.5/",
};

export default function CitySearch() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => setWeather(result));
      setQuery("");
      console.log(weather);
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          className="search-bar"
          placeholder="Search City"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        ></input>
      </header>
      <div className="container">
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="card">
              <h1 className="location" placeholder="City">
                {weather.name}, {weather.sys.country}
              </h1>
              <h5 className="py-4">{dateBuilder(new Date())}</h5>
              <div className="temp">
                Current Temperature {weather.main.temp}&deg;F
              </div>
              <div className="description">{weather.weather[0].main}</div>
              <button className="button">Save</button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
