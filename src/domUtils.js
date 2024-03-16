function createWeatherElements(location, description, temp) {
  const body = document.querySelector("body");

  const weatherSection = document.createElement("section");
  const weatherDescription = document.createElement("h3");
  const weatherLocation = document.createElement("h1");
  const weatherTemperature = document.createElement("p");
  const weatherTemperatureOutline = document.createElement("div");

  weatherSection.classList.add("weather");
  weatherDescription.classList.add("weather-description");
  weatherLocation.classList.add("weather-location");
  weatherTemperature.classList.add("weather-temperature");
  weatherTemperatureOutline.classList.add("weather-temp-border");

  weatherLocation.textContent = `${location}`;
  weatherDescription.textContent = `${description}`;
  weatherTemperature.textContent = `${temp}°`;

  weatherTemperatureOutline.append(weatherTemperature);
  weatherSection.append(weatherLocation);
  weatherSection.append(weatherDescription);
  weatherSection.append(weatherTemperatureOutline);

  body.append(weatherSection);
}
function createErrorElement() {
  const body = document.querySelector("body");
  const error = document.createElement("div");
  error.id = "error";
  body.append(error);
}
function createSearchDropdown(data) {
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

      dropdownList.append(dropdownItem);
      dropdown.append(dropdownList);
    }
    dropdownSection.append(dropdown);
  }
}
export { createWeatherElements, createErrorElement, createSearchDropdown };
