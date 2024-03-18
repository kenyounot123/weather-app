import { createAllElements, createSearchDropdown } from "./domUtils";
import { fetchCurrentData, fetchLocationsData } from "./fetchData";
import "./stylesheets/style.css";

(function main() {
  function showError(message) {
    const error = document.querySelector("#error");
    error.textContent = message;
  }

  function clearImgElement() {
    const imgContainer = document.querySelector(".img-container");
    imgContainer.remove();
  }
  function clearWeatherElements() {
    const weatherSection = document.querySelector(".weather");
    weatherSection.remove();
  }
  function clearInputField() {
    const searchInput = document.querySelector(".search");
    searchInput.value = "";
  }
  function clearDisplay() {
    clearWeatherElements();
  }
  function setTempValues(data, tempUnit = "farenheit") {
    const currentTemp = document.querySelector(".weather-temperature");
    const currentHighAndLowTemp = document.querySelector(".sub-temp");

    const temp =
      tempUnit === "celsius" ? data.current.temp_c : data.current.temp_f;
    const minTemp =
      tempUnit === "celsius"
        ? data.forecast.forecastday[0].day.mintemp_c
        : data.forecast.forecastday[0].day.mintemp_f;
    const maxTemp =
      tempUnit === "celsius"
        ? data.forecast.forecastday[0].day.maxtemp_c
        : data.forecast.forecastday[0].day.maxtemp_f;

    currentTemp.textContent = `${temp}°`;
    currentHighAndLowTemp.textContent = `H:${maxTemp}° L:${minTemp}°`;
  }
  async function fetchAndCreate(location) {
    try {
      const data = await fetchCurrentData(location);
      createAllElements(data);
      return data;
    } catch (error) {
      showError(`${error}`);
    }
  }

  (async function addListeners() {
    const data = await fetchAndCreate();
    const searchInput = document.querySelector(".search");
    const searchBtn = document.querySelector(".search-icon");
    const dropdown = document.querySelector(".dropdown-menu");
    const toggle = document.querySelector("#temp-toggle");

    toggle.addEventListener("change", (e) => {
      if (e.target.checked) {
        setTempValues(data, "celsius");
      } else {
        setTempValues(data);
      }
    });

    // Event handler for search bar filtering searches as you type
    searchInput.addEventListener("input", async (e) => {
      if (e.target.value) {
        const char = e.target.value;
        const locations = await fetchLocationsData(char);
        dropdown.innerHTML = "";
        createSearchDropdown(locations);
      }
    });
    // Clicking outside of the search will hide the dropdown
    searchInput.addEventListener("blur", (event) => {
      if (
        event.relatedTarget !== null &&
        event.relatedTarget.className === "dropdown-menu-item"
      ) {
        searchInput.focus();
        return;
      }
      dropdown.style.display = "none";
    });
    // Only show the dropdown when input field is focuesd
    searchInput.addEventListener("focus", () => {
      dropdown.style.display = "block";
    });
    // Event handler allowing pressing 'enter' key instead
    searchInput.addEventListener("keydown", async (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const submitValue = searchInput.value;
        clearDisplay();
        fetchAndCreate(submitValue);
        clearInputField();
      }
    });
    // Event handler for clicking search icon
    searchBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const location = searchInput.value;
      if (location) {
        clearDisplay();
        fetchAndCreate(location);
        clearInputField();
      }
    });
  })();
})();
