import {createElement, renderScreen} from '../logic/util.js';
import greeting from './greeting.js';
import hud from './hud.js';
import questions from '../data/questions.js';
import {MOCK_TIME} from '../data/commonConst';
import game, {getQuestionIndex} from '../logic/game';

export default () => {
  let answers = ``;
  const answersQuantity = questions[getQuestionIndex()].answers.length;

  for (let i = 0; i < answersQuantity; i++) {
    answers += `\
    <div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-${i + 1}" name="answer" value="val-${i + 1}"/>
      <label class="main-answer" for="answer-${i + 1}">
        <img class="main-answer-preview" src="${questions[getQuestionIndex()].answers[i].imageSrc}"
             alt="${questions[getQuestionIndex()].answers[i].artist}" width="134" height="134">
        ${questions[getQuestionIndex()].answers[i].artist}
      </label>
    </div>`;
  }

  const template = `\
  <section class="main main--level main--level-artist">
    ${hud()}
    <div class="main-wrap">
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${questions[getQuestionIndex()].question.audio}"></audio>
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
  const form = element.querySelector(`.main-list`);
  element.querySelector(`.play-again`).addEventListener(`click`, () => {
    game.resetData();
    renderScreen(greeting);
  });

  const checkboxes = Array.from(form.elements);
  form.addEventListener(`change`, () => {
    let checkedIndex = null;
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkedIndex = i;
      }
    }
    const answer = {
      isCorrect: false,
      time: MOCK_TIME
    };
    if (questions[getQuestionIndex()].answers[checkedIndex].isCorrect) {
      answer.isCorrect = true;
    }
    game.updateErrorCount(answer);
    game.pushAnswer(answer);
    renderScreen(game.getGameScreen());
  });

  return element;
};
