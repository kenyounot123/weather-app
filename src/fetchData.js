const weatherApiKey = "db4d7cfe43f54003aa0155150240803";

async function getCurrentWeather(place) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${place}&aqi=yes`
  );
  const weatherData = await response.json();

  return weatherData.current.feelslike_f;
}

export default getCurrentWeather;
