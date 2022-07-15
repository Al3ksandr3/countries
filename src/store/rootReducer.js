import { combineReducers } from "redux";

import { appThemeReducer } from "./appTheme/appThemeReducer";
import { searchQueryReducer } from "./searchQuery/searchQueryReducer";
import { filterReducer } from "./filter/filterReducer";
import { regionsReducer } from "./regions/regionsReducer";
import { countryListReducer } from "./countryData/countryDataReducer";

export const rootReducer = combineReducers({
  appTheme: appThemeReducer,
  searchQuery: searchQueryReducer,
  filter: filterReducer,
  regions: regionsReducer,
  countryData: countryListReducer,
});
