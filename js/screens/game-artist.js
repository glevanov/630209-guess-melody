import {createElement, renderScreen} from '../logic/util.js';
import greeting from './greeting.js';
import gameGenre from './game-genre.js';
import progress from '../data/progress.js';

export default (data) => {
  let answers = ``;
  const answersQuantity = data.currentQuestion.answers.length;

  for (let i = 0; i < answersQuantity; i++) {
    answers += `\
    <div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-${i + 1}" name="answer" value="val-${i + 1}"/>
      <label class="main-answer" for="answer-${i + 1}">
        <img class="main-answer-preview" src="${data.currentQuestion.answers[i].imageSrc}"
             alt="${data.currentQuestion.answers[i].artist}" width="134" height="134">
        ${data.currentQuestion.answers[i].artist}
      </label>
    </div>`;
  }

  const template = `\
  <section class="main main--level main--level-artist">
    ${progress}
    <div class="main-wrap">
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${data.currentQuestion.question.audio}"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
      ${answers}
      </form>
    </div>
  </section>`;

  const element = createElement(template);
  element.querySelector(`.play-again`).addEventListener(`click`, () => renderScreen(greeting));
  element.querySelector(`.main-list`).addEventListener(`change`, () => renderScreen(gameGenre(data)));

  return element;
};
