'use strict';
// --Константы
const KEYCODE = {
  RIGHT: 39,
  LEFT: 37
};
const ARROWS = `<div class="arrows__wrap">
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
const mainSection = document.querySelector(`.main`);
const template = document.querySelector(`#templates`);
const screenList = template.content.children;
const app = document.querySelector(`.app`);

// --Переменные
let currentScreen = 0;

// --Функции
const selectScreen = (element) => {
  mainSection.innerHTML = ``;
  mainSection.appendChild(element.cloneNode(true));
};

const switchScreen = (index) => {
  index = index < 0 ? screenList.length - 1 : index;
  index = index >= screenList.length ? 0 : index;
  currentScreen = index;
  selectScreen(screenList[currentScreen]);
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

const initScreen = () => {
  // Выводит первый экран
  selectScreen(screenList[0]);
  // Вставляет стрелки
  app.insertAdjacentHTML(`beforeEnd`, ARROWS);
};

const addHandlers = () => {
  // Добавляет обработчик на клавиши стрелок
  document.addEventListener(`keydown`, onArrowKeyPress);
  // Добавляет обработчик на кнопки стрелок
  {
    const arrows = document.querySelectorAll(`.arrows__btn`);
    const leftArrowButton = arrows[0];
    const rightArrowButton = arrows[1];

    leftArrowButton.addEventListener(`click`, onLeftArrowEvent);
    rightArrowButton.addEventListener(`click`, onRightArrowEvent);
  }
};

// --Вызовы
initScreen();
addHandlers();
