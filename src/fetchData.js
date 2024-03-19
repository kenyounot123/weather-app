const weatherApiKey = "db4d7cfe43f54003aa0155150240803";
async function fetchCurrentData(location = "Binghamton", days = "1") {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${location}&days=${days}aqi=no&alerts=no`
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    throw new Error("Problem during fetching data from API");
  }
}

async function fetchLocationsData(char) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/search.json?key=${weatherApiKey}&q=${char}`
  );
  const locationData = await response.json();

  return locationData;
}

export { fetchCurrentData, fetchLocationsData };
