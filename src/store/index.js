import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";

import { customThunk } from "../http-service/customThunkMIddleware";

import { httpGetService } from "../http-service/http-service";

import { appThemeMiddleware } from "./persistAppTheme/persistAppTheme";

export const reduxStore = createStore(
  rootReducer,
  applyMiddleware(
    customThunk.addExtraArgument(httpGetService),
    appThemeMiddleware
  )
);
