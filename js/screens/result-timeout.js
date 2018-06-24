import {createElement, renderScreen} from '../logic/util.js';
import greeting from './greeting';
import results from '../data/results.js';
import game from '../logic/game.js';

const template = `<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">${results.timeout.title}</h2>
  <div class="main-stat">${results.timeout.stats}</div>
  <span role="button" tabindex="0" class="main-replay">${results.timeout.replay}</span>
</section>`;
const element = createElement(template);

element.querySelector(`.main-replay`).addEventListener(`click`, () => {
  game.resetData();
  renderScreen(greeting);
});

export default element;

