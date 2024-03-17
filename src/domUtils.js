import cloudyImg from "./assets/images/cloudy.jpg";
import sunnyImg from "./assets/images/sunny.jpg";
import rainyImg from "./assets/images/rainy.jpg";
import snowyImg from "./assets/images/snowy.png";
import defaultImg from "./assets/images/default.jpeg";

function createBackgroundElement(weather) {
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const body = document.querySelector("body");
  imgContainer.classList.add("img-container");
  imgContainer.append(img);
  img.id = "img-background";
  // img.src = deafultImg;
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

function createWeatherElements(location, description, temp) {
  const body = document.querySelector("body");

  createBackgroundElement(description);

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
  const temp = data.current.temp_f;
  const description = data.current.condition.text;
  const location = `${data.location.name}, ${data.location.region}`;
  createErrorElement();
  createWeatherElements(location, description, temp);
  createBackgroundElement(description);
}
export { createSearchDropdown, createAllElements };
