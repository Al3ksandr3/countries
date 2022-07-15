import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { reduxStore } from "./store";

import "./index.css";

import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

const appRoot = ReactDOM.createRoot(document.querySelector("#root"));

appRoot.render(
  <BrowserRouter>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </BrowserRouter>
);
