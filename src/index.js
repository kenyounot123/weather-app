import {
  createErrorElement,
  createSearchDropdown,
  createWeatherElements,
} from "./domUtils";
import { fetchCurrentData, fetchLocationsData } from "./fetchData";
import "./stylesheets/style.css";

(function main() {
  function showError(message) {
    const error = document.querySelector("#error");
    error.textContent = message;
  }

  function clearWeatherElements() {
    const weatherSection = document.querySelector(".weather");
    weatherSection.remove();
  }

  async function fetchAndCreate(location) {
    try {
      const data = await fetchCurrentData(location);
      const currentTemp = data.current.temp_f;
      const currentDescription = data.current.condition.text;
      const currentLocation = `${data.location.name}, ${data.location.region}`;
      createWeatherElements(currentLocation, currentDescription, currentTemp);
    } catch (error) {
      createErrorElement();
      showError(`${error}`);
    }
  }

  (async function addListeners() {
    await fetchAndCreate();
    const searchInput = document.querySelector(".search");
    const searchBtn = document.querySelector(".search-icon");
    const dropdown = document.querySelector(".dropdown-menu");

    // Event handler for search bar filtering searches as you type
    searchInput.addEventListener("input", async (e) => {
      if (e.target.value) {
        const char = e.target.value;
        const locations = await fetchLocationsData(char);
        dropdown.innerHTML = "";
        createSearchDropdown(locations);
      }
    });
    searchInput.addEventListener("blur", () => {
      dropdown.style.display = "none";
    });
    searchInput.addEventListener("focus", () => {
      dropdown.style.display = "block";
    });
    // Event handler allowing pressing 'enter' key instead
    searchInput.addEventListener("keydown", async (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const submitValue = searchInput.value;
        clearWeatherElements();
        fetchAndCreate(submitValue);
      }
    });
    // Event handler for clicking search icon
    searchBtn.addEventListener("click", () => {
      const location = searchInput.value;
      clearWeatherElements();
      fetchAndCreate(location);
    });
  })();
})();
