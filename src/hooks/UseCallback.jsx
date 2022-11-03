import React, { memo, useState, useCallback, useMemo } from "react";
// useCallback 和 useMemo
const UseCallback = memo(() => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("你好");

  // 优化
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // 未优化
  // const increment = () => {
  //   setCount(count + 1);
  // };

  return (
    <div>
      <h1>{count}</h1>
      <h2>{message}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={() => setMessage(message + "哦哦")}>嘿嘿</button>
      <Test increment={increment}></Test>
      <Test1></Test1>
    </div>
  );
});

const Test = memo((props) => {
  console.log("test rerender");
  return (
    <div>
      <button onClick={props.increment}> +1 </button>
    </div>
  );
});
const Test1 = memo(() => {
  const [count, setCount] = useState(100);
  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);
  return (
    <div>
      <h1>二倍 {doubleCount}</h1>
      <button onClick={() => setCount(count + 100)}>+100</button>
    </div>
  );
});
export default UseCallback;
