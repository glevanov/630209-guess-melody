export const setTimer = (time) => {
  return {
    time,
    tick() {
      if (time > 1) {
        return setTimer(time - 1);
      } else {
        return {done: true};
      }
    }
  };
};
