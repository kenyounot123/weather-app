import {
  createErrorElement,
  createSearchDropdown,
  createWeatherElements,
  showError,
} from "./domUtils";
import { fetchCurrentData, fetchLocationsData } from "./fetchData";
import "./stylesheets/style.css";

async function initialize() {
  try {
    const data = await fetchCurrentData();
    const currentTemp = data.current.temp_f;
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

    searchInput.addEventListener("input", async (e) => {
      const dropdown = document.querySelector(".dropdown-menu");
      if (dropdown) {
        dropdown.innerHTML = "";
      }
      if (e.target.value) {
        const char = e.target.value;
        let locations = await fetchLocationsData(char);
        console.log(locations);
        createSearchDropdown(locations);
      }
      // Create div under seasrch bar to show results as I type
      // Read target.value and display locations that match that value
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

initialize();
