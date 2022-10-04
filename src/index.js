import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import store from "./toolkit-store";
import store from "./store";
// import { Provider } from "react-redux";
import { StoreContext } from "./react-redux";

import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContext.Provider>
);
