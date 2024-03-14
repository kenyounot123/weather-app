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
function showError(message) {
  const error = document.querySelector("#error");
  error.textContent = message;
}
export { createWeatherElements, showError, createErrorElement };
