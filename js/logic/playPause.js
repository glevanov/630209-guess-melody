export default (audioElement, audioControl) => {
  if (audioElement.paused) {
    audioControl.classList.remove(`player-control--play`);
    audioControl.classList.add(`player-control--pause`);
    audioElement.play();
  } else {
    audioControl.classList.remove(`player-control--pause`);
    audioControl.classList.add(`player-control--play`);
    audioElement.pause();
  }
};
