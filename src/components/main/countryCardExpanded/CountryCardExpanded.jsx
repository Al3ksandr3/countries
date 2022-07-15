import React from "react";

import "./CountryCardExpanded.css";

import { useSelector } from "react-redux";

import { selectAppTheme } from "../../../store/appTheme/appThemeSelectors";
import { selectCountryData } from "../../../store/countryData/countryDataSelectors";

import { useNavigate, useParams } from "react-router-dom";

import { defineMode } from "../../helperMethods";

export default function CountryCardExpanded() {
  const appTheme = useSelector(selectAppTheme);

  const { countryList } = useSelector(selectCountryData);

  const { countryName } = useParams();

  const country = countryList.filter((countryInfo) => {
    return countryInfo.name.toLowerCase() === countryName.toLowerCase();
  })[0];

  const navigator = useNavigate();

  return (
    <section className="country-card-expanded">
      <button
        onClick={(_) => {
          navigator("/");
        }}
        className={`country-card-expanded__btn ${defineMode(
          appTheme,
          "country-card-expanded__btn--dark"
        )}`}
      >
        Go back
      </button>
      <div className="country-card-expanded__info">
        <img
          className="country-card-expanded__info__flag"
          alt={`Flag of the ${country.name}`}
          src={country.flag}
        />
        <span className="country-card-expanded__info__card">
          <h2 className="country-card-expanded__info__card__header">
            {country.name}
          </h2>
          <p className="country-card-expanded__info__card__text">
            <strong>Capital: </strong>
            {country.capital}
          </p>
          <p className="country-card-expanded__info__card__text">
            <strong>Region: </strong>
            {country.region}
          </p>
          <p className="country-card-expanded__info__card__text">
            <strong>Population: </strong>
            {country.population}
          </p>
          <p className="country-card-expanded__info__card__text">
            <strong>Timezones: </strong>
            {country.timezones}
          </p>
        </span>
      </div>
    </section>
  );
}
