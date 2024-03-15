import {
  createErrorElement,
  createWeatherElements,
  showError,
} from "./domUtils";
import fetchCurrentData from "./fetchData";
import "./stylesheets/style.css";

initialize();

async function initialize() {
  try {
    const data = await fetchCurrentData();
    const currentTemp = data.current.feelslike_f;
    const currentDescription = data.current.condition.text;
    const currentLocation = `${data.location.name}, ${data.location.region}`;
    createWeatherElements(currentLocation, currentDescription, currentTemp);
  } catch (error) {
    createErrorElement();
    showError(`${error}`);
  }
}
