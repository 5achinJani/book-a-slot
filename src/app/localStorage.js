export const lckey = "state";
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(lckey);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(lckey, serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};
