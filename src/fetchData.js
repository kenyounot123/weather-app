const weatherApiKey = "db4d7cfe43f54003aa0155150240803";

async function fetchCurrentData(location = "Binghamton") {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${location}&aqi=no`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  const weatherData = await response.json();

  return weatherData;
}

async function fetchLocationsData(char) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/search.json?key=${weatherApiKey}&q=${char}`
  );
  const locationData = await response.json();

  return locationData;
}

export { fetchCurrentData, fetchLocationsData };
