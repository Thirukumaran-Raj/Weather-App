import React from 'react';
import './WeatherEffects.css';

function WeatherEffects({ weatherData }) {
  if (!weatherData) return null;

  const condition = weatherData.weather[0].main.toLowerCase();
  const isWindy = weatherData.wind.speed > 5; 

  const isRain = condition.includes('rain') || condition.includes('drizzle');
  const isStorm = condition.includes('thunderstorm');
  const isCloudy = condition.includes('clouds');
  // ADD THIS LINE:
  const isSnow = condition.includes('snow'); 

  return (
    <div className="weather-effects-container">
      {/* THUNDERSTORM FLASH EFFECT */}
      {isStorm && <div className="lightning-flash"></div>}

      {/* PRO CLOUDS SYSTEM (Layered shapes) */}
      {(isCloudy || isStorm || isRain || isSnow) && (
        <div className="clouds-layer">
          <div className="cloud-group cg-1">
            <div className="cloud-bubble"></div>
          </div>
          <div className="cloud-group cg-2">
            <div className="cloud-bubble"></div>
          </div>
        </div>
      )}

      {/* HIGH-DENSITY SMOOTH RAIN */}
      {(isRain || isStorm) && (
        <div className="rain-layer">
          {[...Array(40)].map((_, i) => (
            <div 
              key={i} 
              className="drop" 
              style={{ 
                left: `${Math.random() * 100}vw`, 
                animationDuration: `${0.4 + Math.random() * 0.4}s`,
                animationDelay: `${Math.random() * 1.5}s`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            ></div>
          ))}
        </div>
      )}

      {/* NEW: DRIFTING SNOW EFFECT */}
      {isSnow && (
        <div className="snow-layer">
          {[...Array(50)].map((_, i) => {
            // Randomize snowflake size from 3px to 8px
            const size = Math.random() * 5 + 3;
            return (
              <div 
                key={i} 
                className="snowflake" 
                style={{ 
                  left: `${Math.random() * 100}vw`, 
                  width: `${size}px`,
                  height: `${size}px`,
                  animationDuration: `${3 + Math.random() * 4}s`, // Snow falls slower than rain
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random() * 0.6 + 0.4
                }}
              ></div>
            );
          })}
        </div>
      )}

      {/* KINETIC WIND STREAKS */}
      {isWindy && (
        <div className="wind-layer">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="wind-stream"
              style={{
                top: `${20 + Math.random() * 60}vh`,
                animationDuration: `${1.5 + Math.random() * 1.5}s`,
                animationDelay: `${Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WeatherEffects;