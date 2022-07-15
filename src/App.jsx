import React, { useEffect } from "react";

import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main";

import { useSelector, useDispatch } from "react-redux";

import { loadCountryData } from "./store/countryData/countryDataActions";

import { selectCountryData } from "./store/countryData/countryDataSelectors.js";

import "./App.css";

export default function App() {
  const dispatcher = useDispatch();
  const countryData = useSelector(selectCountryData);

  const getDataPath = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    dispatcher(loadCountryData(getDataPath));
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}
