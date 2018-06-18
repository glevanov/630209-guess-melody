import {createElement, renderScreen} from '../logic/util.js';
import greeting from './greeting';
import resultWin from './result-win';
import resultTimeout from './result-timeout';
import resultExhaust from './result-fail';
import progress from '../data/progress.js';

const answers = `\
<div class="genre-answer">
  <div class="player-wrapper">
    <div class="player">
      <audio></audio>
      <button class="player-control player-control--pause"></button>
      <div class="player-track">
        <span class="player-status"></span>
      </div>
    </div>
  </div>
  <input type="checkbox" name="answer" value="answer-1" id="a-1">
  <label class="genre-answer-check" for="a-1"></label>
</div>

<div class="genre-answer">
  <div class="player-wrapper">
    <div class="player">
      <audio></audio>
      <button class="player-control player-control--play"></button>
      <div class="player-track">
        <span class="player-status"></span>
      </div>
    </div>
  </div>
  <input type="checkbox" name="answer" value="answer-1" id="a-2">
  <label class="genre-answer-check" for="a-2"></label>
</div>

<div class="genre-answer">
  <div class="player-wrapper">
    <div class="player">
      <audio></audio>
      <button class="player-control player-control--play"></button>
      <div class="player-track">
        <span class="player-status"></span>
      </div>
    </div>
  </div>
  <input type="checkbox" name="answer" value="answer-1" id="a-3">
  <label class="genre-answer-check" for="a-3"></label>
</div>

<div class="genre-answer">
  <div class="player-wrapper">
    <div class="player">
      <audio></audio>
      <button class="player-control player-control--play"></button>
      <div class="player-track">
        <span class="player-status"></span>
      </div>
    </div>
  </div>
  <input type="checkbox" name="answer" value="answer-1" id="a-4">
  <label class="genre-answer-check" for="a-4"></label>
</div>
`;

const template = `\
<section class="main main--level main--level-genre">
  ${progress}
  <div class="main-wrap">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      ${answers}
      <button class="genre-answer-send" type="submit" disabled>Ответить</button>
    </form>
  </div>
</section>`;
const element = createElement(template);

element.querySelector(`.play-again`).addEventListener(`click`, () => renderScreen(greeting));

const getRndResultScreen = () => {
  const resultElements = [resultWin, resultTimeout, resultExhaust];
  const rndIndex = Math.floor(Math.random() * resultElements.length - 1);
  return resultElements[rndIndex];
};

const answerForm = element.querySelector(`.genre`);
const sendButton = answerForm.querySelector(`.genre-answer-send`);
const checkboxes = Array.from(answerForm.elements.answer);
answerForm.addEventListener(`change`, () => {
  sendButton.disabled = !checkboxes.some((it) => it.checked);
});
answerForm.addEventListener(`submit`, () => renderScreen(getRndResultScreen()));

export default element;
