import { useState } from "react";
import "./filter.scss";
import { useSearchParams } from "react-router-dom";
function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    MinPrice: searchParams.get("MinPrice") || 0,
    MaxPrice: searchParams.get("MaxPrice") || 1000000,
    Bedroom: searchParams.get("Bedroom") || 1,
  });

  const handlChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };
  return (
    <div className="filter">
      <h1>
        Search results For <b>{searchParams.get("city")}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="Location">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            onChange={handlChange}
            defaultValue={query.city}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="location">Type</label>
          <select
            name="type"
            id="type"
            onChange={handlChange}
            defaultValue={query.type}
          >
            <option value="any">Any</option>
            <option value="buy">Buy</option>
            <option value="Rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select
            name="property"
            id="property"
            onChange={handlChange}
            defaultValue={query.property}
          >
            <option value="any">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            onChange={handlChange}
            defaultValue={query.MinPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            onChange={handlChange}
            defaultValue={query.MaxPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            onChange={handlChange}
            defaultValue={query.Bedroom}
          />
        </div>
        <button className="button" onClick={handleFilter}>
          <img src="./search.png"></img>
        </button>
      </div>
    </div>
  );
}

export default Filter;
