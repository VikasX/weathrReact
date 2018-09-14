import axios from "axios";

const API_KEY = "48264f6a5dad034b617d2ff327f1fedc";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const ART_URL = `http://localhost/api/articles`;




export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},india`;
  const request = axios.get(url);

console.log("REQUEST------------------WEATHER", request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}





export const FETCH_ARTICLE = "FETCH_ARTICLE";

export function fetchArticle() {
  const url = `${ART_URL}`;
  const request = axios.get(url);

console.log("REQUEST------------------ARTICLE", request);
  return {
    type: FETCH_ARTICLE,
    payload: request
  };
}
