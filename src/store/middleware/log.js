// monkey patch
export function log(store) {
  const dispatch = store.dispatch;
  function logAndDispatch(action) {
    console.log("action: ", action);
    dispatch(action);
    console.log("派发结果: ", store.getState());
  }
  store.dispatch = logAndDispatch;
}
