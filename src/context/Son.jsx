import React, { memo } from "react";
import { ThemeContext } from "./Main";
const Son = memo((props) => {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <div style={{ color: value.color }}>
          <button onClick={() => props.addCount(1)}>+1</button>
          <button onClick={() => props.addCount(5)}>+5</button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
});

export default Son;
