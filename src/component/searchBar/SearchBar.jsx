import React, { useState } from "react";

import "./searchBar.scss";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>

      <form>
        <input type="text" name="location" placeholder="Towson"></input>
        <input
          type="number"
          name="location"
          minPrice="MinPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        ></input>
        <input
          type="number"
          name="location"
          maxPrice="MaxPrice"
          min={0}
          max={10000000}
          placeholder="Max price"
        ></input>
        <button>
          <img src="./search.png" alt=""></img>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
