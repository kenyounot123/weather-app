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
  return appendElements(weatherInfoSection, [
    weatherLocation,
    weatherDescription,
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
    "weather-temperature",
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
function createAllElements(data) {
  createErrorElement();
  createWeatherElements(data);
}

export { createSearchDropdown, createAllElements };
