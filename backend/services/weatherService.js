import axios from "axios";

export const fetchWeather = async (city) => {
  try {
    const API_KEY = process.env.WEATHER_API_KEY;

    //console.log("API KEY:", API_KEY);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await axios.get(url);

    return response.data;

  } catch (error) {

    console.error("FULL ERROR:", error.response?.data || error.message);
    throw error;
  }
};