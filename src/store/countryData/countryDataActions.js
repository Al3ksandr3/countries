import { COUNTRY_DATA_ARRIVED, ERROR_ON_LOAD } from "./countryDataConstants";
import { DEFINE_UNIQUE_REGIONS } from "../regions/regionsConstants";

export function loadCountryData(path) {
  return function (dispatch, getState, httpClient) {
    httpClient(path, dispatch)
      .then((payload) => {
        dispatch({ type: COUNTRY_DATA_ARRIVED, payload });

        const uniqueRegions = [
          ...new Set(
            payload.map((country) => {
              return country.region;
            })
          ),
        ];

        dispatch({ type: DEFINE_UNIQUE_REGIONS, payload: uniqueRegions });
      })
      .catch((errorMessage) => {
        dispatch({
          type: ERROR_ON_LOAD,
          payload: errorMessage,
        });
      });
  };
}
