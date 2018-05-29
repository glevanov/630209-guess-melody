'use strict';
const keycode = {
  right: 39,
  left: 37
};

const mainSection = document.querySelector(`.main`);
const template = document.querySelector(`#templates`);
const screenList = template.content.children;

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

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case keycode.left:
      switchScreen(currentScreen - 1);
      break;
    case keycode.right:
      switchScreen(currentScreen + 1);
      break;
  }
});

selectScreen(screenList[0]);
