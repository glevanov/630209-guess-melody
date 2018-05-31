'use strict';
(() => {
  const Keycode = {
    RIGHT: 39,
    LEFT: 37
  };
  const ARROWS_TEMPLATE = `<div class="arrows__wrap">
    <style>
      .arrows__wrap {
        position: absolute;
        top: 135px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn"><-</button>
    <button class="arrows__btn">-></button>
</div>`;

  const templateContent = document.querySelector(`#templates`).content;
  const app = document.querySelector(`.app`);
  const screens = Array.from(templateContent.querySelectorAll(`.main`));

  let currentScreen = 0;

  const renderScreen = (element) => {
    const activeScreen = document.querySelector(`.main`);
    app.replaceChild(element.cloneNode(true), activeScreen);
  };

  const switchScreen = (index) => {
    index = index < 0 ? 0 : index;
    index = index >= screens.length ? screens.length - 1 : index;
    currentScreen = index;
    renderScreen(screens[currentScreen]);
  };

  const onLeftArrowEvent = () => {
    switchScreen(currentScreen - 1);
  };

  const onRightArrowEvent = () => {
    switchScreen(currentScreen + 1);
  };

  const onArrowKeyPress = (evt) => {
    switch (evt.keyCode) {
      case Keycode.LEFT:
        onLeftArrowEvent();
        break;
      case Keycode.RIGHT:
        onRightArrowEvent();
        break;
    }
  };

  renderScreen(screens[0]);

  document.addEventListener(`keydown`, onArrowKeyPress);

  app.insertAdjacentHTML(`beforeEnd`, ARROWS_TEMPLATE);
  const arrows = document.querySelectorAll(`.arrows__btn`);
  const leftArrowButton = arrows[0];
  const rightArrowButton = arrows[1];
  leftArrowButton.addEventListener(`click`, onLeftArrowEvent);
  rightArrowButton.addEventListener(`click`, onRightArrowEvent);
})();
