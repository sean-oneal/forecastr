
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.API_KEY}`;

export FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}, us`;

  return {
    type: FETCH_WEATHER
  };
}
