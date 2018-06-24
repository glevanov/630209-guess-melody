import {createElement, renderScreen} from '../logic/util.js';
import greeting from './greeting';
import hud from './hud.js';
import questions from '../data/questions.js';
import {pushAnswer, getGameScreen, resetData, getQuestionIndex} from '../logic/controller';
import {MOCK_TIME} from "../data/commonConst";

export default () => {
  let answers = ``;
  const answersQuantity = questions[getQuestionIndex()].answers.length;

  for (let i = 0; i < answersQuantity; i++) {
    answers += `\
    <div class="genre-answer">
      <div class="player-wrapper">
        <div class="player">
          <audio src="${questions[getQuestionIndex()].answers[i].audio}"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <input type="checkbox" name="answer" value="answer-${i + 1}" id="a-${i + 1}">
      <label class="genre-answer-check" for="a-${i + 1}"></label>
    </div>`;
  }

  const template = `\
  <section class="main main--level main--level-genre">
    ${hud}
    <div class="main-wrap">
      <h2 class="title">Выберите ${questions[getQuestionIndex()].question.genre} треки</h2>
      <form class="genre">
        ${answers}
        <button class="genre-answer-send" type="submit" disabled>Ответить</button>
      </form>
    </div>
  </section>`;

  const element = createElement(template);

  element.querySelector(`.play-again`).addEventListener(`click`, () => {
    resetData();
    renderScreen(greeting);
  });

  const answerForm = element.querySelector(`.genre`);
  const sendButton = answerForm.querySelector(`.genre-answer-send`);
  const checkboxes = Array.from(answerForm.elements.answer);
  answerForm.addEventListener(`change`, () => {
    sendButton.disabled = !checkboxes.some((it) => it.checked);
  });

  answerForm.addEventListener(`submit`, () => {
    const correctAnswers = [];
    questions[getQuestionIndex()].answers.forEach((it) => {
      correctAnswers.push(it.isCorrect);
    });
    const playerAnswers = [];
    checkboxes.forEach((it) => {
      playerAnswers.push(it.checked);
    });

    const answer = {
      isCorrect: false,
      time: MOCK_TIME
    };
    if (playerAnswers.toString() === correctAnswers.toString()) {
      answer.isCorrect = true;
    }
    pushAnswer(answer);
    renderScreen(getGameScreen());
  });

  return element;
};
