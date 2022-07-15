import { FILTER_CLEARED, FILTER_MODIFIED } from "./filterConstant";

export function filterReducer(currentState = "All", action) {
  switch (action.type) {
    case FILTER_MODIFIED:
      return action.payload;
    case FILTER_CLEARED:
      return "All";
    default:
      return currentState;
  }
}
