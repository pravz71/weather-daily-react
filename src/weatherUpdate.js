const key = process.env.ACCUWEATHER_API_KEY;
const getWeatherUpdateByCityId = async (id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

const getCityDetails = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

const getWeatherUpdate = async (city) => {
  const cityDetails = await getCityDetails(city);
  const weatherUpdate = await getWeatherUpdateByCityId(cityDetails.Key);
  return {
    cityDetails,
    weatherUpdate
  };
};

export default getWeatherUpdate;

