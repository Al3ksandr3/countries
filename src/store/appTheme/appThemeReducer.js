import { persistAppTheme } from "../persistAppTheme/persistAppTheme";

const initialTheme = persistAppTheme("appTheme", undefined, "get");

export function appThemeReducer(currentState = initialTheme, action) {
  switch (action.type) {
    case "CHANGE_APP_THEME":
      return currentState === "Light" ? "Dark" : "Light";
    default:
      return currentState;
  }
}
