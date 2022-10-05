import React from "react";
import { createBrowserHistory, createHashHistory } from "history";

import { Router } from "../react-router";
export function BrowserRouter({ children }) {
  const historyRef = React.useRef(null);
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory();
  }
  const history = historyRef.current;

  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });
  return (
    <Router
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
}
export function HashRouter({ children }) {
  const historyRef = React.useRef(null);
  if (historyRef.current == null) {
    historyRef.current = createHashHistory();
  }
  const history = historyRef.current;

  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => {
    history.listen(setState);
  }, [history]);
  return (
    <Router
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
}
