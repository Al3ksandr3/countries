import { CHANGE_APP_THEME } from "../appTheme/appThemeConstants";

export function persistAppTheme(key, value, mode) {
  if (mode === "save") {
    localStorage.setItem(key, value);
    return;
  }

  let persistedValue = localStorage.getItem(key);

  return persistedValue ? persistedValue : "Light";
}

export function appThemeMiddleware(store) {
  return function (next) {
    return function (action) {
      if (action.type === CHANGE_APP_THEME) {
        const currentTheme = store.getState().appTheme;
        const newTheme = currentTheme === "Light" ? "Dark" : "Light";
        persistAppTheme("appTheme", newTheme, "save");
      }
      next(action);
    };
  };
}
