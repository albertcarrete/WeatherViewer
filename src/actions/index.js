import axios from 'axios';

const API_KEY = 'eb904305acf2c866905b9bd267153cba';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

// Action creator: fetchWeather
export function fetchWeather(city) {

	const url=`${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return{
		type: FETCH_WEATHER,
		payload: request
	}
}