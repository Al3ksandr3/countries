import React from "react";

import "./CountryList.css";

import { useSelector } from "react-redux/es/exports";
import { selectCountryData } from "../../../store/countryData/countryDataSelectors";
import { selectSearchQuery } from "../../../store/searchQuery/searchQueySelectors";
import { selectFilter } from "../../../store/filter/filterSelectors";

import CountryCard from "./countryCard/CountryCard";
import { selectAppTheme } from "../../../store/appTheme/appThemeSelectors";

import { defineMode } from "../../helperMethods";

export default function CountryList() {
  const { countryList, status, errorMessage } = useSelector(selectCountryData);
  const searchQuery = useSelector(selectSearchQuery);
  const selectedFilter = useSelector(selectFilter);
  const appTheme = useSelector(selectAppTheme);

  const filteredCountryList = countryList.filter((country) => {
    return (
      (country.region === selectedFilter || selectedFilter === "All") &&
      (country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        searchQuery === "")
    );
  });

  let content;

  if (status === "Loading...") {
    content = (
      <p
        className={`country-list__message ${defineMode(
          appTheme,
          "country-list__message--dark"
        )}`}
      >
        {status}
      </p>
    );
  }

  if (errorMessage) {
    content = (
      <p
        className={`country-list__error ${defineMode(
          appTheme,
          "country-list__error--dark"
        )}`}
      >
        {errorMessage}
      </p>
    );
  }

  if (filteredCountryList.length) {
    content = filteredCountryList.map((countryData) => {
      return <CountryCard key={countryData.name} {...countryData} />;
    });
  }

  return <div className="country-list">{content}</div>;
}
