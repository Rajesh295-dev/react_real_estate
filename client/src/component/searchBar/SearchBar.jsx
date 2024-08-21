import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //this for all USA property api
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const { type, city, minPrice, maxPrice } = query;
  //   const apiUrl = `https://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${API_KEY}&address=${city}&citystatezip=${city}&rentzestimate=true`;

  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Property data:", data);
  //       // Handle data retrieval here, e.g., update state with fetched data
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       // Handle error if needed
  //     });
  // };

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
        <input
          type="text"
          name="city"
          placeholder="Towson"
          onChange={handleChange}
        ></input>
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          onChange={handleChange}
        ></input>
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max price"
          onChange={handleChange}
        ></input>

        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice${query.maxPrice}`}
        >
          <button>
            <img src="./search.png" alt=""></img>
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
