import { createAllElements, createSearchDropdown } from "./domUtils";
import { fetchCurrentData, fetchLocationsData } from "./fetchData";
import "./stylesheets/style.css";

(async function main() {
  function showError(error) {
    const errorContainer = document.querySelector("#error");
    errorContainer.textContent = error;
  }
  function createLoader(size) {
    const loader = document.createElement("div");

    loader.classList.add("loader", `loader--${size}`);

    return loader;
  }
  function hideLoading(element) {
    element.remove();
  }
  function clearWeatherElements() {
    const weatherSection = document.querySelector(".weather");
    weatherSection.remove();
  }
  function clearInputField() {
    const searchInput = document.querySelector(".search");
    searchInput.value = "";
  }
  function fetchAndCreate(location) {
    const body = document.querySelector("body");
    const loader = createLoader("main");
    body.append(loader);

    return fetchCurrentData(location)
      .then((data) => createAllElements(data))
      .catch((error) => showError(error))
      .finally(() => hideLoading(loader));
    // try {
    //   const data = await fetchCurrentData(location);
    //   createAllElements(data);
    // } catch (error) {
    //   showError(`${error}`);
    // } finally {
    //   hideLoading(loader);
    // }
  }

  async function addListeners() {
    const searchInput = document.querySelector(".search");
    const searchBtn = document.querySelector(".search-icon");
    const dropdown = document.querySelector(".dropdown-menu");
    let timer;

    // Event handler for search bar filtering searches as you type
    // Only make the API call after the user has stopped typing
    searchInput.addEventListener("input", (e) => {
      const string = e.target.value;
      clearTimeout(timer);
      if (string) {
        timer = setTimeout(async () => {
          const searchResults = await fetchLocationsData(string);
          dropdown.innerHTML = "";
          createSearchDropdown(searchResults);
        }, 500);
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
  }

  fetchAndCreate().then(() => addListeners());
})();
