import { DEFINE_UNIQUE_REGIONS } from "./regionsConstants";

export function regionsReducer(currentState = [], action) {
  switch (action.type) {
    case DEFINE_UNIQUE_REGIONS:
      return ["All", ...action.payload];
    default:
      return currentState;
  }
}
