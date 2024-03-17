import cloudyImg from "./assets/images/cloudy.jpg";
import sunnyImg from "./assets/images/sunny.jpg";
import rainyImg from "./assets/images/rainy.jpg";
import snowyImg from "./assets/images/snowy.png";
import defaultImg from "./assets/images/default.jpeg";

function createBackgroundElement(data) {
  const weather = data.current.condition.text;

  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const body = document.querySelector("body");
  imgContainer.classList.add("img-container");
  imgContainer.append(img);
  img.id = "img-background";
  if (weather.toLowerCase().includes("cloudy")) {
    img.src = cloudyImg;
  } else if (weather.toLowerCase().includes("sunny")) {
    img.src = sunnyImg;
  } else if (weather.toLowerCase().includes("rainy")) {
    img.src = rainyImg;
  } else if (weather.toLowerCase().includes("snowy")) {
    img.src = snowyImg;
  } else {
    img.src = cloudyImg;
  }

  // Append the video element to the document or wherever it needs to be appended
  body.appendChild(imgContainer);
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
  weatherContentContainer.append(weatherLocation);
  weatherContentContainer.append(weatherDescription);
  weatherContentContainer.append(weatherTemperatureOutline);
  weatherSection.append(weatherContentContainer);

  body.append(weatherSection);
}
function createErrorElement() {
  const body = document.querySelector("body");
  const error = document.createElement("div");
  error.id = "error";
  body.append(error);
}

function createForecastElements() {}

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
  createErrorElement();
  createWeatherElements(data);
  createBackgroundElement(data);
}
export { createSearchDropdown, createAllElements };
