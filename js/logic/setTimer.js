export const setTimer = (time) => {
  return {
    time,
    tick() {
      if (time >= 1) {
        this.time -= 1;
      }
      return {
        time: this.time,
        done: this.time === 0};
    }
  };
};
