import {assert} from 'chai';
import {calculateScore} from '../logic.js';
/*
Итого тестируем
Функция подсчёта набранных баллов игрока
Функция вывода результата игрока
функция создания таймера
*/
function Answer(isCorrect, time) {
  this.isCorrect = isCorrect;
  this.time = time;
}

const getMockAnswers = (totalAnswers, correctAnswers, quickAnswers) => {
  let answers = [];
  const longAnswer = 60;
  const quickAnswer = 10;

  for (let i = 0; i < totalAnswers; i++) {
    answers.push(new Answer(false, longAnswer));
  }
  for (let i = 0; i < correctAnswers; i++) {
    answers[i].isCorrect = true;
  }
  for (let i = 0; i < quickAnswers; i++) {
    answers[i].time = quickAnswer;
  }
  return answers;
};

describe(`check score calculation`, () => {
  it(`handles less then 10 answers`, () => {
    assert.equal(-1, calculateScore(getMockAnswers(9, 9, 9)));
  });
  it(`handles 3 errors`, () => {
    assert.equal(0, calculateScore(getMockAnswers(6, 3, 0)));
  });
  it(`calculates correct answers`, () => {
    assert.equal(0, calculateScore(getMockAnswers(10, 1, 0)));
    assert.equal(4, calculateScore(getMockAnswers(10, 8, 0)));
    assert.equal(10, calculateScore(getMockAnswers(10, 10, 0)));
    assert.equal(0, calculateScore(getMockAnswers(10, 1, 1)));
    assert.equal(12, calculateScore(getMockAnswers(10, 8, 8)));
    assert.equal(20, calculateScore(getMockAnswers(10, 10, 10)));
    assert.equal(0, calculateScore(getMockAnswers(10, 5, 1)));
    assert.equal(15, calculateScore(getMockAnswers(10, 10, 5)));
  });
});
