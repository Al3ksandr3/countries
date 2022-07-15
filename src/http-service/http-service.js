import { EMPTY_COUNTRY_DATA } from "../store/countryData/countryDataConstants";

export async function httpGetService(path, dispatcher) {
  dispatcher({ type: EMPTY_COUNTRY_DATA });

  try {
    const getData = await fetch(path);

    if (!getData.ok) {
      throw new Error("404, data not found!");
    }

    return getData.json();
  } catch (error) {
    throw error.message;
  }
}
