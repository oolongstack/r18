import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import store from "./toolkit-store";
import store from "./store";
import { Provider } from "react-redux";
import { StoreContext } from "./react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
