import {getScreenFromTemplate, renderScreen, app} from './util.js';
import ARROWS_TEMPLATE from './arrows_template.js';
import WELCOME_TEMPLATE from './welcome_template.js';
import GAME_GENRE_TEMPLATE from './game_genre_template';
import GAME_ARTIST_TEMPLATE from './game_artist_template.js';
import RESULT_WIN_TEMPLATE from './result_win.js';
import RESULT_TIMEOUT_TEMPLATE from './result_timeout.js';
import RESULT_EXHAUST_TEMPLATE from './result_exhaust.js';

const Keycode = {
  ARROW_RIGHT: 39,
  ARROW_LEFT: 37
};

const screens = [getScreenFromTemplate(WELCOME_TEMPLATE),
  getScreenFromTemplate(GAME_GENRE_TEMPLATE),
  getScreenFromTemplate(GAME_ARTIST_TEMPLATE),
  getScreenFromTemplate(RESULT_WIN_TEMPLATE),
  getScreenFromTemplate(RESULT_TIMEOUT_TEMPLATE),
  getScreenFromTemplate(RESULT_EXHAUST_TEMPLATE)];

let currentScreen = 0;

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
    case Keycode.ARROW_LEFT:
      onLeftArrowEvent();
      break;
    case Keycode.ARROW_RIGHT:
      onRightArrowEvent();
      break;
  }
};

renderScreen(screens[0]);

document.addEventListener(`keydown`, onArrowKeyPress);

app.insertAdjacentHTML(`beforeEnd`, ARROWS_TEMPLATE);
const arrows = app.querySelectorAll(`.arrows__btn`);
const leftArrowButton = arrows[0];
const rightArrowButton = arrows[1];
leftArrowButton.addEventListener(`click`, onLeftArrowEvent);
rightArrowButton.addEventListener(`click`, onRightArrowEvent);
