import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAppTheme } from "../../../store/appTheme/appThemeSelectors";
import { changeAppTheme } from "../../../store/appTheme/appThemeActions";

import darkMode from "../../../assets/darkMode.svg";
import lightMode from "../../../assets/lightMode.svg";

import { defineMode } from "../../helperMethods";

import "./ThemeSelector.css";

export default function ThemeSelector() {
  const dispatcher = useDispatch();
  const appTheme = useSelector(selectAppTheme);

  function handleClick(clickE) {
    dispatcher(changeAppTheme());
  }

  return (
    <span className="theme-selector">
      <img
        src={appTheme === "Dark" ? darkMode : lightMode}
        alt="Dark/Light mode toggle."
        className={`theme-selector__toggle ${defineMode(
          appTheme,
          "toggle--dark"
        )}
        `}
      />
      <p
        className={`theme-selector__text ${defineMode(appTheme, "text--dark")}`}
        onClick={handleClick}
      >
        {appTheme + " Mode"}
      </p>
    </span>
  );
}
