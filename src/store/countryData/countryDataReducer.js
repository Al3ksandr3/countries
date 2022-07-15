import {
  COUNTRY_DATA_ARRIVED,
  ERROR_ON_LOAD,
  EMPTY_COUNTRY_DATA,
} from "./countryDataConstants";

const initialState = {
  countryList: [],
  status: "Loading",
  errorMessage: "",
};

export function countryListReducer(currentState = initialState, action) {
  switch (action.type) {
    case EMPTY_COUNTRY_DATA:
      return {
        countryList: [],
        status: "Loading...",
        errorMessage: "",
      };
    case COUNTRY_DATA_ARRIVED:
      const filteredData = action.payload.map((countryData) => {
        return {
          name: countryData.name.official,
          capital: Array.isArray(countryData.capital)
            ? countryData.capital[0]
            : countryData.capital,
          population: countryData.population,
          flag: countryData.flags.png,
          timezones:
            countryData.timezones.length === 1
              ? countryData.timezones[0]
              : countryData.timezones.join(", "),
          region: countryData.region,
        };
      });

      return {
        errorMessage: "",
        status: "Loaded",
        countryList: filteredData,
      };
    case ERROR_ON_LOAD:
      return {
        countryList: [],
        status: "Failed",
        errorMessage: action.payload,
      };
    default:
      return currentState;
  }
}
