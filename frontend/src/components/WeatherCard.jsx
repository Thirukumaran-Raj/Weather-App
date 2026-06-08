function WeatherCard({ data }) {
  return (
    // ADDED className HERE:
    <div className="weather-card">
      <h2>{data.name}</h2>
      <p>🌡️ Temp: {data.main.temp} °C</p>
      <p>💧 Humidity: {data.main.humidity}%</p>
      <p>🌬️ Wind: {data.wind.speed} m/s</p>
      <p>☁️ {data.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;