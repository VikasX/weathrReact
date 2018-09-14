import { combineReducers } from "redux";
import WeatherReducer from "./reducer_weather";
import ArticleReducer from "./reducer_article";




const rootReducer = combineReducers({
  weather: WeatherReducer,
  articles: ArticleReducer
});

export default rootReducer;
