import { SEARCH_QUERY_MODIFIED } from "./searchQueryConstants";

export function searchQueryModified(payload) {
  return { type: SEARCH_QUERY_MODIFIED, payload };
}
