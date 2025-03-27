import "./searchBar.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const types = ["buy", "rent"];
  const switchType = (val) => {
    console.log("Value in switch Type function: ", val);
    setQuery((previousValue) => ({ ...previousValue, type: val })); // keeping other things save and only changing the type
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            type="button"
            key={type}
            onClick={() => switchType(type)}
            // onClick={() => console.log(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Max Price"
        />
        <button>
          <CiSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
