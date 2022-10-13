import React, { memo } from "react";

const S = memo((props) => {
  return <div>{props.itemType("嘿嘿嘿")}</div>;
});

export default S;
