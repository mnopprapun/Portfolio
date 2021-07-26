import CitySearch from "../CitySearch.js";
import React from 'react'

export default function WeatherPage() {
	return (
		<div>
			<div>
				<h1 className='title'> Search a City </h1>
			</div>
			<CitySearch/>
		</div>
	)
}
