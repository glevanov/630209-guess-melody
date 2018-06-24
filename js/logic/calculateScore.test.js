import {assert} from 'chai';
import calculate from './calculate.js';

const LONG_ANSWER = 60;
const QUICK_ANSWER = 10;

const getMockAnswers = (totalAnswers, correctAnswers, quickAnswers) => {
  const answers = [];

  for (let i = 0; i < totalAnswers; i++) {
    answers.push({isCorrect: false, time: LONG_ANSWER});
  }
  for (let i = 0; i < correctAnswers; i++) {
    answers[i].isCorrect = true;
  }
  for (let i = 0; i < quickAnswers; i++) {
    answers[i].time = QUICK_ANSWER;
  }
  return answers;
};

describe(`score calculation`, () => {
  it(`fails if less then 10 answers`, () => {
    assert.equal(-1, calculate.score(getMockAnswers(9, 9, 9), 0));
    assert.equal(-1, calculate.score(getMockAnswers(9, 8, 1), 1));
    assert.equal(-1, calculate.score(getMockAnswers(9, 7, 5), 2));
  });
  it(`fails once there are 3 notes`, () => {
    assert.equal(-1, calculate.score(getMockAnswers(6, 3, 0), 3));
    assert.equal(-1, calculate.score(getMockAnswers(5, 2, 1), 3));
    assert.equal(-1, calculate.score(getMockAnswers(4, 1, 1), 3));
  });
  it(`calculates score correctly`, () => {
    assert.equal(10, calculate.score(getMockAnswers(10, 10, 0), 0));
    assert.equal(20, calculate.score(getMockAnswers(10, 10, 10), 0));
    assert.equal(7, calculate.score(getMockAnswers(10, 9, 0), 1));
    assert.equal(12, calculate.score(getMockAnswers(10, 9, 5), 1));
    assert.equal(4, calculate.score(getMockAnswers(10, 8, 0), 2));
    assert.equal(5, calculate.score(getMockAnswers(10, 8, 1), 2));
    assert.equal(12, calculate.score(getMockAnswers(10, 8, 8), 2));
  });
});
