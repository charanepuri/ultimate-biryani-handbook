import { useState } from "react";
import biryanis from "../data/biryanis";
import BiryaniCard from "./BiryaniCard";
import SearchBar from "./SearchBar";

const FeaturedBiryanis = () => {
const [searchTerm, setSearchTerm] = useState("");
const [filter, setFilter] = useState("All");

const filteredBiryanis = biryanis.filter((item) => {
const matchesSearch = item.name
.toLowerCase()
.includes(searchTerm.toLowerCase());


const matchesFilter =
  filter === "All" || item.type === filter;

return matchesSearch && matchesFilter;


});

return ( <section className="featured"> <h2>Famous Indian Biryanis 🍛</h2>


  <SearchBar
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
  />

  <div className="filter-buttons">
    <button
      className={filter === "All" ? "active-filter" : ""}
      onClick={() => setFilter("All")}
    >
      All
    </button>

    <button
      className={filter === "Veg" ? "active-filter" : ""}
      onClick={() => setFilter("Veg")}
    >
      Veg
    </button>

    <button
      className={filter === "Non-Veg" ? "active-filter" : ""}
      onClick={() => setFilter("Non-Veg")}
    >
      Non-Veg
    </button>
  </div>

  <p className="result-count">
    Showing {filteredBiryanis.length} Biryani(s)
  </p>

  {filteredBiryanis.length > 0 ? (
    <div className="cards-container">
      {filteredBiryanis.map((biryani) => (
        <BiryaniCard
          key={biryani.id}
          biryani={biryani}
        />
      ))}
    </div>
  ) : (
    <h3 className="no-results">
      No Biryani Found 🍛
    </h3>
  )}
</section>

);
};

export default FeaturedBiryanis;
