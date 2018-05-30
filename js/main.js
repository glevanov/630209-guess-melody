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
const screensList = template.content.children;
const app = document.querySelector(`.app`);

// --Переменные
let currentScreen = 0;

// --Функции
const selectScreen = (element) => {
  mainSection.innerHTML = ``;
  mainSection.appendChild(element.cloneNode(true));
};

const switchScreen = (index) => {
  index = index < 0 ? screensList.length - 1 : index;
  index = index >= screensList.length ? 0 : index;
  currentScreen = index;
  selectScreen(screensList[currentScreen]);
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
selectScreen(screensList[0]);
// Вешает обработчик на нажалие стрелок влево-вправо
document.addEventListener(`keydown`, onArrowKeyPress);

// Вставляет стрелки из шаблона стрелок и вешает на них обработчики
app.insertAdjacentHTML(`beforeEnd`, ARROWS);

const arrows = document.querySelectorAll(`.arrows__btn`);
const leftArrowButton = arrows[0];
const rightArrowButton = arrows[1];

leftArrowButton.addEventListener(`click`, onLeftArrowEvent);
rightArrowButton.addEventListener(`click`, onRightArrowEvent);
