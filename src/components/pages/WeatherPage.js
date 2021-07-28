import CitySearch from "../CitySearch.js";
import React from "react";
import WeatherCard from "../WeatherCard.js";

export default function WeatherPage() {
  return (
    <div>
      <div>
        <h1 className="title"> Search a City </h1>
      </div>
      <CitySearch />
      <div className="textbox">
        <WeatherCard></WeatherCard>
        <card>On this particular project</card>
      </div>
    </div>
  );
}
