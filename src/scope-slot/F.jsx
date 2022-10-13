import React, { memo } from "react";
import S from "./S";
const F = memo(() => {
  return (
    <div>
      <S itemType={(item) => <button>{item}</button>}></S>
    </div>
  );
});

export default F;
