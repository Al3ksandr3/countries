import { SEARCH_QUERY_MODIFIED } from "./searchQueryConstants";

export function searchQueryReducer(currentState = "", action) {
  switch (action.type) {
    case SEARCH_QUERY_MODIFIED:
      return action.payload;
    default:
      return currentState;
  }
}
