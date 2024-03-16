import {
  createErrorElement,
  createSearchDropdown,
  createWeatherElements,
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
    const dropdown = document.querySelector(".dropdown-menu");
    const dropdownItem = document.querySelector(".dropdown-menu-item");

    searchInput.addEventListener("input", async (e) => {
      if (e.target.value) {
        const char = e.target.value;
        const locations = await fetchLocationsData(char);
        dropdown.innerHTML = "";
        createSearchDropdown(locations);
      }
    });
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        console.log("Enter key pressed");
      }
    });

    searchBtn.addEventListener("click", () => {
      const location = searchInput.value;
    });
  })();
  function showError(message) {
    const error = document.querySelector("#error");
    error.textContent = message;
  }

  function clearWeatherElements() {}
}

initialize();
