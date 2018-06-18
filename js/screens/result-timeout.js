import {createElement, renderScreen} from '../logic/util.js';
import greeting from './greeting';
import results from '../data/results.js';

const template = `<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">${results.timeout.title}</h2>
  <div class="main-stat">${results.timeout.message}</div>
  <span role="button" tabindex="0" class="main-replay">${results.timeout.replay}</span>
</section>`;
const element = createElement(template);

element.querySelector(`.main-replay`).addEventListener(`click`, () => renderScreen(greeting));

export default element;

