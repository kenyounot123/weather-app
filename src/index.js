import { createAllElements, createSearchDropdown } from "./domUtils";
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
  function clearInputField() {
    const searchInput = document.querySelector(".search");
    searchInput.value = "";
  }
  async function fetchAndCreate(location) {
    try {
      const data = await fetchCurrentData(location);
      console.log(data);
      createAllElements(data);
    } catch (error) {
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
    searchInput.addEventListener("keydown", (event) => {
      const submitValue = searchInput.value;
      // Check if user inputted a string of length greater than 0
      if (event.key === "Enter" && submitValue.length > 0) {
        event.preventDefault();
        clearWeatherElements();
        fetchAndCreate(submitValue);
        clearInputField();
        dropdown.innerHTML = "";
      }
    });
    // Event handler for clicking search icon
    searchBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const submitValue = searchInput.value;
      // Check if user inputted a string of length greater than 0
      if (submitValue.length > 0) {
        clearWeatherElements();
        fetchAndCreate(submitValue);
        clearInputField();
        dropdown.innerHTML = "";
      }
    });
  })();
})();
