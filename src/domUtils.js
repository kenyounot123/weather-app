import cloudyImg from "./assets/images/cloudy.jpg";
import sunnyImg from "./assets/images/sunny.jpg";
import rainyImg from "./assets/images/rainy.jpg";
import snowyImg from "./assets/images/snowy.png";

function createBackgroundElement(data) {
  const weather = data.current.condition.text.toLowerCase();
  const body = document.querySelector("body");
  if (weather.includes("cloud")) {
    body.style.backgroundImage = `url('${cloudyImg}')`;
  } else if (weather.includes("sun")) {
    body.style.backgroundImage = `url('${sunnyImg}')`;
  } else if (weather.includes("rain") || weather.includes("drizzle")) {
    body.style.backgroundImage = `url('${rainyImg}')`;
  } else if (weather.includes("snow")) {
    body.style.backgroundImage = `url('${snowyImg}')`;
  } else {
    body.style.backgroundImage = `url('${cloudyImg}')`;
  }
}

function createWeatherElements(data) {
  const temp = data.current.temp_f;
  const description = data.current.condition.text;
  const location = `${data.location.name}, ${data.location.region}`;
  const minTemp = data.forecast.forecastday[0].day.mintemp_f;
  const maxTemp = data.forecast.forecastday[0].day.maxtemp_f;

  const body = document.querySelector("body");
  const weatherSection = document.createElement("section");
  const weatherContentContainer = document.createElement("div");
  const weatherDescription = document.createElement("h3");
  const weatherLocation = document.createElement("h1");
  const weatherTemperature = document.createElement("p");
  const weatherTemperatureOutline = document.createElement("div");
  const weatherHighAndLowTemp = document.createElement("p");

  weatherSection.classList.add("weather");
  weatherDescription.classList.add("weather-description");
  weatherLocation.classList.add("weather-location");
  weatherTemperature.classList.add("weather-temperature");
  weatherTemperatureOutline.classList.add("weather-temp-border");
  weatherContentContainer.classList.add("current-weather-details");
  weatherHighAndLowTemp.classList.add("sub-temp");

  weatherLocation.textContent = `${location}`;
  weatherDescription.textContent = `${description}`;
  weatherTemperature.textContent = `${temp}°`;
  weatherHighAndLowTemp.textContent = `H:${maxTemp}° L:${minTemp}°`;

  weatherTemperatureOutline.append(weatherTemperature);
  weatherTemperatureOutline.append(weatherHighAndLowTemp);
  weatherTemperatureOutline.append(createTempToggle());
  weatherContentContainer.append(weatherLocation);
  weatherContentContainer.append(weatherDescription);
  weatherContentContainer.append(weatherTemperatureOutline);
  weatherSection.append(weatherContentContainer);

  body.append(weatherSection);
}

function createTempToggle() {
  const toggleContainer = document.createElement("div");
  const tempToggle = document.createElement("input");

  toggleContainer.classList.add("toggle-container");
  tempToggle.id = "temp-toggle";

  tempToggle.setAttribute("type", "checkbox");
  toggleContainer.append(tempToggle);

  return toggleContainer;
}
function createErrorElement() {
  const body = document.querySelector("body");
  const error = document.createElement("div");
  error.id = "error";
  body.append(error);
}

function createSearchDropdown(data) {
  const searchInput = document.querySelector(".search");
  const dropdownSection = document.querySelector(".dropdown-menu");
  const dropdown = document.createElement("ul");
  dropdown.id = "dropdown";
  if (data.length > 0) {
    for (let location = 0; location < data.length; location += 1) {
      const dropdownList = document.createElement("li");
      const dropdownItem = document.createElement("a");

      dropdownItem.classList.add("dropdown-menu-item");
      dropdownItem.setAttribute("href", "#");
      dropdownList.classList.add("dropdown-list");

      dropdownItem.textContent = `${data[location].name}, ${data[location].region}`;
      dropdownItem.addEventListener("click", (event) => {
        const clickedLocation = event.target.textContent;
        searchInput.value = clickedLocation;
      });

      dropdownList.append(dropdownItem);
      dropdown.append(dropdownList);
    }
    dropdownSection.append(dropdown);
  }
}
function createAllElements(data) {
  createBackgroundElement(data);
  createErrorElement();
  createWeatherElements(data);
}
export { createSearchDropdown, createAllElements };
