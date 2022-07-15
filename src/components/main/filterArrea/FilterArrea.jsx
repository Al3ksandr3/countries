import React from "react";

import Searchbar from "./searchbar/Searchbar";

import "./FilterArrea.css";
import RegionSelector from "./regionSelector/RegionSelector";

export default function FilterArrea() {
  return (
    <section className="filter-arrea">
      <Searchbar />
      <RegionSelector />
    </section>
  );
}
