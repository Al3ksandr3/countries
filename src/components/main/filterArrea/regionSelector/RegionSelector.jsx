import React, { useState } from "react";

import "./RegionSelector.css";

import RegionsList from "./regionsList/RegionsList";

import { useSelector, useDispatch } from "react-redux";

import { selectAppTheme } from "../../../../store/appTheme/appThemeSelectors";
import { selectFilter } from "../../../../store/filter/filterSelectors";
import {
  FILTER_CLEARED,
  FILTER_MODIFIED,
} from "../../../../store/filter/filterConstant";

import { defineMode } from "../../../helperMethods";

import expand from "../../../../assets/expand.svg";
import collapse from "../../../../assets/collapse.svg";

export default function RegionSelector() {
  const appTheme = useSelector(selectAppTheme);
  const regions = useSelector((state) => state.regions);

  const dispatcher = useDispatch();

  const [expanded, setExpanded] = useState(false);

  const filterValue = useSelector(selectFilter);

  function setFilterStatusByClick() {
    setExpanded((prevState) => {
      return !prevState;
    });
  }

  function clearFilterByClick(clickE) {
    dispatcher({ type: FILTER_CLEARED });
  }

  function setFilterByClick(payload, clickE) {
    dispatcher({ type: FILTER_MODIFIED, payload });
    setExpanded(false);
  }

  return (
    <span
      className={`region-selector ${defineMode(
        appTheme,
        "region-selector--dark"
      )}`}
    >
      <div className="region-selector__text">
        {filterValue}
        <button
          className={`region-selector__text__btn ${defineMode(
            appTheme,
            "region-selector__text__btn--dark"
          )}`}
          onClick={clearFilterByClick}
        >
          X
        </button>
        {expanded ? (
          <RegionsList
            regions={regions}
            onClick={setFilterByClick}
            appTheme={appTheme}
          />
        ) : (
          ""
        )}
      </div>

      <img
        src={expanded ? collapse : expand}
        onClick={setFilterStatusByClick}
        alt={`${expanded ? "Expanded" : "Collapsed"} icon.`}
        className="region-selector__icon"
      />
    </span>
  );
}
