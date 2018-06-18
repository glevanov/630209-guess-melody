import {createElement, renderScreen} from '../logic/util.js';
import greeting from './greeting';
import results from '../data/results.js';

const template = `<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">${results.win.title}</h2>
  <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
    <br>вы&nbsp;набрали 12 баллов (8 быстрых)
    <br>совершив 3 ошибки</div>
  <span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
  <span role="button" tabindex="0" class="main-replay">${results.win.replay}</span>
</section>`;
const element = createElement(template);

element.querySelector(`.main-replay`).addEventListener(`click`, () => renderScreen(greeting));

export default element;