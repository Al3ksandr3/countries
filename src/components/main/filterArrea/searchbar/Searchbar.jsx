import React from "react";

import "./Searchbar.css";

import searchIcon from "../../../../assets/search.svg";

import { useSelector, useDispatch } from "react-redux";

import { selectAppTheme } from "../../../../store/appTheme/appThemeSelectors";
import { selectSearchQuery } from "../../../../store/searchQuery/searchQueySelectors";
import { searchQueryModified } from "../../../../store/searchQuery/searchQueryActions";

import { defineMode } from "../../../helperMethods";

export default function Searchbar({
  placeholderText = "Search for a country...",
}) {
  const appTheme = useSelector(selectAppTheme);
  const searchQuery = useSelector(selectSearchQuery);
  const dispacther = useDispatch();

  function handleChange(changeE) {
    dispacther(searchQueryModified(changeE.target.value));
  }

  return (
    <span className={`searchbar ${defineMode(appTheme, "searchbar--dark")}`}>
      <img className="searchbar__icon" src={searchIcon} alt="Search icon." />
      <input
        className="searchbar__input"
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder={placeholderText}
      />
    </span>
  );
}
