export function thunk(store) {
  const next = store.dispatch;
  function dispatchThunk(action) {
    if (typeof action === "function") {
      // 使用新的dispatch
      action(store.dispatch, store.getState);
    } else {
      next(action);
    }
  }
  store.dispatch = dispatchThunk;
}
