function createWeatherElements(location, description, temp) {
  const weatherSection = document.createElement("section");
  const weatherDescription = document.createElement("h3");
  const weatherLocation = document.createElement("h1");
  const weatherTemperature = document.createElement("p");

  weatherSection.classList.add("weather");
  weatherDescription.classList.add("weather-description");
  weatherLocation.classList.add("weather-location");
  weatherTemperature.classList.add("weather-temperature");

  weatherLocation.textContent = `${location}`;
  weatherLocation.textContent = `${description}`;
  weatherLocation.textContent = `${temp}`;

  weatherSection.append(weatherLocation);
  weatherSection.append(weatherDescription);
  weatherSection.append(weatherTemperature);
  return weatherSection;
}
export { createWeatherElements };
