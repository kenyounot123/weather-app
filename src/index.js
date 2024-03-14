import { createWeatherElements } from "./domUtils";
import fetchCurrentData from "./fetchData";
import "./stylesheets/style.css";

async function initialize() {
  const data = await fetchCurrentData("London");
  console.log(data);
}
initialize();
