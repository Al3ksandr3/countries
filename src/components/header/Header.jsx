import React from "react";

import { useSelector } from "react-redux";
import { selectAppTheme } from "../../store/appTheme/appThemeSelectors";

import { defineMode } from "../helperMethods";

import "./Header.css";

import HeaderText from "./headerText/HeaderText";
import ThemeSelector from "./themeSelector/ThemeSelector";

export default function Header() {
  const appTheme = useSelector(selectAppTheme);

  return (
    <header className={`header ${defineMode(appTheme, "header--dark")}`}>
      <nav className="header__navbar">
        <HeaderText text="Where is the world?" />
        <ThemeSelector />
      </nav>
    </header>
  );
}
