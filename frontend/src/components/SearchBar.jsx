import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  return (
    // Wrap them in a form or a div
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <input 
        type="text" 
        placeholder="Enter city..." 
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;