import React, { memo, useEffect } from "react";
import { useState } from "react";
import UseCallback from "./UseCallback";
export const themeContext = React.createContext({ name: "cjl" });
const Hooks = memo((props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count;
    return function () {
      // unmount
      console.log("清除");
    };
  }, [count]);
  // 依赖值为空数组，说明该effect没有多余的依赖，只会在组件挂载时执行一次
  useEffect(() => {
    console.log("nihao");
    return () => {};
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <br />
      <h1>----------------------</h1>
      <UseCallback />
    </div>
  );
});

export default Hooks;
