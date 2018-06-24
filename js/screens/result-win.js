import {createElement, renderScreen} from '../logic/util.js';
import greeting from './greeting';
import results from '../data/results.js';
import game from '../logic/game.js';

export default () => {
  const template = `<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">${results().win.title}</h2>
  <div class="main-stat">${results().win.stats}</div>
  <span class="main-comparison">${results().win.comparison}</span>
  <span role="button" tabindex="0" class="main-replay">${results().win.replay}</span>
</section>`;
  const element = createElement(template);

  element.querySelector(`.main-replay`).addEventListener(`click`, () => {
    game.resetData();
    renderScreen(greeting);
  });

  return element;
};
