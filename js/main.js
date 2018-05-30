'use strict';
// --Константы
const KEYCODE = {
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

// --DOM
const templateContent = document.querySelector(`#templates`).content;
const app = document.querySelector(`.app`);
const ScreensElements = {
  welcome: templateContent.querySelector(`.main--welcome`),
  genre: templateContent.querySelector(`.main--level-genre`),
  artist: templateContent.querySelector(`.main--level-artist`),
  result: {
    win: templateContent.querySelectorAll(`.main--result`)[0],
    timeout: templateContent.querySelectorAll(`.main--result`)[1],
    exhausted: templateContent.querySelectorAll(`.main--result`)[2]
  }
};
const screens = [
  ScreensElements.welcome,
  ScreensElements.genre,
  ScreensElements.artist,
  ScreensElements.result.win,
  ScreensElements.result.timeout,
  ScreensElements.result.exhausted,
];

// --Переменные
let currentScreen = 0;

// --Функции
const renderScreen = (element) => {
  const activeScreen = document.querySelector(`.main`);
  activeScreen.remove();
  app.insertBefore(element.cloneNode(true), app.children[0]);
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
    case KEYCODE.LEFT:
      onLeftArrowEvent();
      break;
    case KEYCODE.RIGHT:
      onRightArrowEvent();
      break;
  }
};

// --Разное

// Выбирает первый экран
renderScreen(screens[0]);

// Вешает обработчик на нажатие стрелок влево-вправо
document.addEventListener(`keydown`, onArrowKeyPress);

// Вставляет стрелки из шаблона стрелок и вешает на них обработчики
app.insertAdjacentHTML(`beforeEnd`, ARROWS_TEMPLATE);

const arrows = document.querySelectorAll(`.arrows__btn`);
const leftArrowButton = arrows[0];
const rightArrowButton = arrows[1];

leftArrowButton.addEventListener(`click`, onLeftArrowEvent);
rightArrowButton.addEventListener(`click`, onRightArrowEvent);
