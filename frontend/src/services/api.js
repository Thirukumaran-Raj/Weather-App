import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const getWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather/${city}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};