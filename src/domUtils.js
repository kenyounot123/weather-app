import cloudyImg from "./assets/images/cloudy.gif";
import sunnyImg from "./assets/images/sunny.gif";
import rainyImg from "./assets/images/rainy.gif";
import snowyImg from "./assets/images/snow.gif";
import windyImg from "./assets/images/windy.gif";
import stormImg from "./assets/images/storm.gif";

function setTempValues(data, tempUnit = "farenheit") {
  const currentTemp = document.querySelector(".current-temperature");
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
function createWeatherImage(data) {
  const weatherCondition = data.current.condition.text;
  const img = createElement("img", "weather-condition-img");
  const weather = weatherCondition.toLowerCase();

  if (weather.includes("sun")) {
    img.src = sunnyImg;
  } else if (weather.includes("snow")) {
    img.src = snowyImg;
  } else if (weather.includes("rain")) {
    img.src = rainyImg;
  } else if (weather.includes("wind")) {
    img.src = windyImg;
  } else if (weather.includes("storm")) {
    img.src = stormImg;
  } else {
    img.src = cloudyImg;
  }
  return img;
}
function createTempToggle(data) {
  const toggleContainer = document.createElement("div");
  const tempToggle = document.createElement("input");

  toggleContainer.classList.add("toggle-container");
  tempToggle.id = "temp-toggle";

  tempToggle.setAttribute("type", "checkbox");
  toggleContainer.append(tempToggle);

  tempToggle.addEventListener("change", (e) => {
    if (e.target.checked) {
      setTempValues(data, "celsius");
    } else {
      setTempValues(data);
    }
  });

  return toggleContainer;
}
function createWeatherElements(data) {
  const body = document.querySelector("body");
  const weatherInfoSection = createWeatherInfoSection(data);
  const weatherContentContainer = createWeatherContentContainer();
  const weatherTemperatureSection = createWeatherTemperatures(data);

  weatherInfoSection.append(weatherTemperatureSection);
  const weatherContent = appendElements(weatherContentContainer, [
    weatherInfoSection,
  ]);

  body.append(weatherContent);
}

function createWeatherInfoSection(data) {
  const weatherInfoSection = createElement("section", "weather");
  const weatherLocation = createElement(
    "h1",
    "weather-location",
    `${data.location.name}, ${data.location.region}`
  );
  const weatherDescription = createElement(
    "h3",
    "weather-description",
    data.current.condition.text
  );
  const weatherImg = createWeatherImage(data);
  return appendElements(weatherInfoSection, [
    weatherLocation,
    weatherDescription,
    weatherImg,
  ]);
}

function createWeatherContentContainer() {
  return createElement("div", "current-weather-details");
}

function createWeatherTemperatures(data) {
  const tempUnitSwitch = createTempToggle(data);
  const temp = data.current.temp_f;
  const minTemp = data.forecast.forecastday[0].day.mintemp_f;
  const maxTemp = data.forecast.forecastday[0].day.maxtemp_f;

  const weatherTemperature = createElement(
    "p",
    "current-temperature",
    `${temp}°`
  );
  const weatherHighAndLowTemp = createElement(
    "p",
    "sub-temp",
    `H:${maxTemp}° L:${minTemp}°`
  );
  const weatherTemperatureSection = createElement("div", "weather-temps");

  appendElements(weatherTemperatureSection, [
    weatherTemperature,
    weatherHighAndLowTemp,
    tempUnitSwitch,
  ]);
  return weatherTemperatureSection;
}

function createElement(tagName, className, textContent = "") {
  const element = document.createElement(tagName);
  if (className) {
    element.classList.add(className);
  }
  element.textContent = textContent;
  return element;
}

function appendElements(parent, children) {
  children.forEach((child) => parent.appendChild(child));
  return parent;
}

function createSearchDropdown(data) {
  const searchInput = document.querySelector(".search");
  const dropdownSection = document.querySelector(".dropdown-menu");
  const dropdown = document.createElement("ul");
  dropdown.id = "dropdown";

  data.forEach((location) => {
    const dropdownList = document.createElement("li");
    const dropdownItem = document.createElement("a");

    dropdownItem.classList.add("dropdown-menu-item");
    dropdownItem.setAttribute("href", "#");
    dropdownList.classList.add("dropdown-list");

    dropdownItem.textContent = `${location.name}, ${location.region}`;
    dropdownItem.addEventListener("click", (event) => {
      const clickedLocation = event.target.textContent;
      searchInput.value = clickedLocation;
    });

    dropdownList.append(dropdownItem);
    dropdown.append(dropdownList);
  });
  dropdownSection.append(dropdown);
}

function clearWeatherElements() {
  const weatherSection = document.querySelector(".weather");
  weatherSection.remove();
}

export { createSearchDropdown, createWeatherElements, clearWeatherElements };
