import React from "react";

import "./RegionsList.css";

import { defineMode } from "../../../../helperMethods";

export default function RegionsList(props) {
  return (
    <ul
      className={`regions-list ${defineMode(
        props.appTheme,
        "regions-list--dark"
      )}`}
    >
      {props.regions.map((region) => {
        return (
          <li key={region} onClick={props.onClick.bind(null, region)}>
            {region}
          </li>
        );
      })}
    </ul>
  );
}
