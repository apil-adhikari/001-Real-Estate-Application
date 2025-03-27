import React from "react";
import "./filter.scss";
import { CiSearch } from "react-icons/ci";

const Filter = () => {
  return (
    <div className="filter">
      <h1>
        Search result for <strong>London</strong>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        {/* Type */}
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="Rent">Rent</option>
          </select>
        </div>

        {/* Property */}
        <div className="item">
          <label htmlFor="property">Proverty</label>
          <select name="property" id="property">
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>

        {/* Minimum Price */}
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            name="minPrice"
            id="minPrice"
            placeholder="any"
            min={0}
            max={1000000}
          />
        </div>

        {/* Maximum Price */}
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            name="maxPrice"
            id="maxPrice"
            placeholder="any"
            min={0}
            max={1000000}
          />
        </div>

        {/* Bedroom */}
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="number" name="bedroom" id="bedroom" placeholder="any" />
        </div>
        <button>
          <CiSearch />
        </button>
      </div>
    </div>
  );
};

export default Filter;
