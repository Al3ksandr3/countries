import React from "react";

import "./CountryCard.css";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectAppTheme } from "../../../../store/appTheme/appThemeSelectors";

import { defineMode } from "../../../helperMethods";

export default function CountryCard(props) {
  const appTheme = useSelector(selectAppTheme);

  return (
    <Link
      to={`/${props.name}`}
      className={`country-card ${defineMode(appTheme, "country-card--dark")}`}
    >
      <img
        src={`${props.flag}`}
        alt={`Flag of ${props.name}`}
        className="country-card__flag"
      />
      <span className="country-card__info">
        <h2 className="country-card__info__name">{props.name}</h2>
        <p className="country-card__info__adInfo">
          <strong className="country-card__info__adInfo--strong">
            Capital:{" "}
          </strong>
          {props.capital}
        </p>
        <p className="country-card__info__adInfo">
          <strong className="country-card__info__adInfo--strong">
            Region:{" "}
          </strong>
          {props.region}
        </p>
        <p className="country-card__info__adInfo">
          <strong className="country-card__info__adInfo--strong">
            Population:{" "}
          </strong>
          {props.population}
        </p>
        <p className="country-card__info__adInfo">
          <strong className="country-card__info__adInfo--strong">
            Timezones:{" "}
          </strong>
          {props.timezones}
        </p>
      </span>
    </Link>
  );
}
