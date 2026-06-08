import React from "react";

function Forecast({ forecastData }) {
  if (!forecastData || !forecastData.list) return null;

  // Filter the 40-item array to only get the readings at 12:00:00 (Noon) each day
  const dailyData = forecastData.list.filter((reading) =>
    reading.dt_txt.includes("12:00:00")
  );

  return (
    <div className="forecast-container">
      {dailyData.map((day, index) => {
        // Convert the date string to a short day name (e.g., "Mon", "Tue")
        const date = new Date(day.dt_txt);
        const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

        return (
          <div key={index} className={`forecast-item stagger-${index}`}>
            <p className="forecast-day">{dayName}</p>
            {/* OpenWeatherMap provides icons, we can use them directly! */}
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="forecast-icon"
            />
            <p className="forecast-temp">{Math.round(day.main.temp)}°</p>
          </div>
        );
      })}
    </div>
  );
}

export default Forecast;