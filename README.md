# 🌦️ Dynamic Weather App

> A production-ready weather application built with **React.js + Vite**, featuring a real-time Dynamic Atmospheric Engine, Glassmorphism UI, and kinetic CSS weather animations.

---
## Project Live Link 🟢 : https://weather-app-cerw-7o1953pwi-thirukumaran-rs-projects.vercel.app/
## ✨ Features

- 🎨 **Real-Time Climate Theming** — Background gradients and animations morph to match live weather conditions
- 🌧️ **Kinetic Weather Effects Engine** — CSS-only rain, snow, clouds, and lightning particles (no canvas libraries)
- 🔮 **Glassmorphism UI** — Premium frosted-glass card design using `backdrop-filter` and translucent layers
- 📅 **5-Day Staggered Forecast** — Daily noon-filtered forecast with sequential card reveal animations
- 🌍 **City Search** — Search any city worldwide for live weather data

---

## 🖼️ Supported Weather Themes

| Condition | Theme |
|---|---|
| ☀️ Clear | Golden Horizon |
| ☁️ Clouds | Slate Gray |
| 🌧️ Rain | Deep Charcoal |
| ⛈️ Thunderstorm | Heavy Indigo |
| ❄️ Snow | Icy White |
| 🌙 Night | Midnight Glow |

Switching between themes uses a smooth `transition: background 1.2s ease-in-out` — no jarring screen flashes.

---

## 📂 Project Structure

```
Weather-App/
└── frontend/
    ├── src/
    │   ├── services/
    │   │   └── api.js              # API layer — fetch logic, keys, endpoints
    │   ├── pages/
    │   │   └── Home.jsx            # Global state, theme logic, data coordination
    │   └── components/
    │       ├── WeatherCard.jsx     # Current temp, humidity, wind display
    │       ├── Forecast.jsx        # 5-day scrollable mini-cards
    │       └── WeatherEffects.jsx  # Fixed-position particle overlay engine
    ├── .env                        # API key (not committed)
    └── vite.config.js
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- A free API key from [OpenWeatherMap](https://openweathermap.org/api)

### 1. Clone & Install

```bash
cd Weather-App/frontend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `frontend/` root:

```env
VITE_WEATHER_API_KEY=your_actual_api_key_here
```

> ⚠️ The `VITE_` prefix is required by Vite to expose the variable to client-side code.

### 3. Start the Development Server

```bash
npm run dev
```

Open your browser at **http://localhost:5173**

---

## 🛠️ Technical Highlights

### Kinetic Weather Effects (`WeatherEffects.jsx`)

- **Clouds** — Nested `::before` / `::after` pseudo-elements with `filter: blur()` and looping `linear` keyframes
- **Rain & Snow** — Dynamically generated arrays of up to **50 DOM nodes**, each with randomized `animation-duration`, `animation-delay`, and horizontal position for a natural chaotic fall
- **Thunderstorm** — Full-screen overlay that pulses `opacity` between `0` and `0.8` at irregular intervals to simulate lightning

### Glassmorphism Card

```css
background: rgba(255, 255, 255, 0.12);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### 5-Day Forecast Filtering

The OpenWeatherMap 3-hour endpoint returns **40 data points** over 5 days. The app filters to only the `12:00:00` reading per day for a clean daily view, with staggered reveal animations via `.stagger-0` through `.stagger-4` CSS classes.

---

## 📦 Tech Stack

| Tool | Purpose |
|---|---|
| React.js | UI framework |
| Vite | Build tool & dev server |
| OpenWeatherMap API | Live weather & forecast data |
| CSS Animations | Particle effects & transitions |

---

## 📄 License

This project is open-source. Feel free to fork, modify, and build on it.
