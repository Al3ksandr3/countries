import React from "react";
import "./Main.css";

import FilterArrea from "./filterArrea/FilterArrea";
import CountryList from "./countryList/CountryList";
import CountryCardExpanded from "./countryCardExpanded/CountryCardExpanded";

import { useSelector } from "react-redux";
import { selectAppTheme } from "../../store/appTheme/appThemeSelectors";
import { selectCountryData } from "../../store/countryData/countryDataSelectors";

import { defineMode } from "../helperMethods";

import { Routes, Route, Navigate } from "react-router-dom";

export default function Main() {
  const appTheme = useSelector(selectAppTheme);
  const { countryList } = useSelector(selectCountryData);

  return (
    <main className={`main ${defineMode(appTheme, "main--dark")}`}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FilterArrea />
              <CountryList />
            </>
          }
        />
        <Route
          path="/:countryName"
          element={
            countryList.length ? <CountryCardExpanded /> : <Navigate to="/" />
          }
        />
      </Routes>
    </main>
  );
}
