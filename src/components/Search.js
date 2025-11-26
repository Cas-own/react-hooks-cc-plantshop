import React from "react";

function Search({ onSearchChange }) {
  // Handler for input change, calls the parent handler prop
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="search-bar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;