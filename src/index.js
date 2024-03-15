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

  (function addListeners() {
    const searchInput = document.querySelector(".search");
    const searchBtn = document.querySelector(".search-icon");

    searchInput.addEventListener("input", (event) => {
      console.log(event.target.value);
    });
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        console.log("Enter key pressed");
      }
    });

    searchBtn.addEventListener("click", () => {
      console.log("hi");
    });
  })();
}
