import {createElement, renderScreen} from '../logic/util.js';
import greeting from './greeting.js';
import progress from '../data/progress.js';
import questions from '../data/questions.js';
import {data} from '../data/data.js';
import {MOCK_TIME} from '../data/commonConst';
import {incrementQuestionCounter, pushAnswer, getGameScreen, resetData} from '../logic/controller';

export default () => {
  let answers = ``;
  const answersQuantity = questions[data.currentQuestion].answers.length;

  for (let i = 0; i < answersQuantity; i++) {
    answers += `\
    <div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-${i + 1}" name="answer" value="val-${i + 1}"/>
      <label class="main-answer" for="answer-${i + 1}">
        <img class="main-answer-preview" src="${questions[data.currentQuestion].answers[i].imageSrc}"
             alt="${questions[data.currentQuestion].answers[i].artist}" width="134" height="134">
        ${questions[data.currentQuestion].answers[i].artist}
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
          <audio src="${questions[data.currentQuestion].question.audio}"></audio>
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
    resetData();
    renderScreen(greeting);
  });
  form.addEventListener(`change`, () => {
    const checkboxes = Array.from(form.elements);
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
    if (questions[data.currentQuestion].answers[checkedIndex].isCorrect) {
      answer.isCorrect = true;
    }
    pushAnswer(answer);
    incrementQuestionCounter();
    renderScreen(getGameScreen());
  });

  return element;
};
