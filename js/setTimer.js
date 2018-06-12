export const setTimer = (time) => {
  return {
    time,
    tick() {
      if (time > 0) {
        return time - 1;
      } else {
        return {done: true};
      }
    }
  };
};
