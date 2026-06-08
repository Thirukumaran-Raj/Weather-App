import { fetchWeather } from "../services/weatherService.js";

export const getWeather = async (req, res) => {
  //console.log("🔥 Controller Hit");

  try {
    const city = req.params.city;

    const data = await fetchWeather(city);

    res.json(data);
  } catch (error) {
    console.error("Controller Error:", error.message);
    res.status(500).json({ message: "Error fetching weather data" });
  }
};