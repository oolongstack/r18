import React, { memo, useContext } from "react";
import { themeContext } from "./index";
const Context = memo(() => {
  const theme = useContext(themeContext);
  return <div>{theme.name}</div>;
});

export default Context;
