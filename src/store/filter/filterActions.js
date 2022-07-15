import { FILTER_MODIFIED } from "./filterConstant";

export function filterModified(region) {
  return { type: FILTER_MODIFIED, payload: region };
}
