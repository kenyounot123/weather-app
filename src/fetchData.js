const weatherApiKey = "db4d7cfe43f54003aa0155150240803";

async function fetchCurrentData(location = "London") {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${location}&aqi=no`
  );
  const weatherData = await response.json();

  return weatherData;
}

export default fetchCurrentData;
