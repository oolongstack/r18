import React, { memo, useEffect, useState } from "react";
import store from "../store";
import { addAction } from "../store/actionCreators";
const Home = memo(() => {
  const { getState, dispatch, subscribe } = store;
  const [count, setCount] = useState(getState().count);
  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setCount(getState().count);
    });
    return () => {
      unsubscribe();
    };
  }, [count, subscribe, getState]);
  return (
    <div>
      count:{count}
      <button onClick={() => dispatch(addAction())}>+1</button>
    </div>
  );
});

export default Home;
