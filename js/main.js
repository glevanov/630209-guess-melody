'use strict';
const keycode = {
  right: 39,
  left: 37
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

const mainSection = document.querySelector(`.main`);
const template = document.querySelector(`#templates`);
const screenList = template.content.children;
const app = document.querySelector(`.app`);

let currentScreen = 0;

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
    case keycode.left:
      onLeftArrowEvent();
      break;
    case keycode.right:
      onRightArrowEvent();
      break;
  }
};

const initScreen = () => {
  selectScreen(screenList[0]);
  app.insertAdjacentHTML(`beforeEnd`, ARROWS);
};


initScreen();
document.addEventListener(`keydown`, onArrowKeyPress);
