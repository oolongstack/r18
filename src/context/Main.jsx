import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import Son from "./Son";
export const ThemeContext = React.createContext();
const Main = memo(() => {
  const [count, setCount] = useState(0);
  const addCount = (val) => {
    setCount(count + val);
  };
  return (
    <ThemeContext.Provider value={{ color: "red", name: "cjl" }}>
      count:{count}
      <Son addCount={addCount} />
    </ThemeContext.Provider>
  );
});
Main.propTypes = {
  name: PropTypes.string,
};
export default Main;
