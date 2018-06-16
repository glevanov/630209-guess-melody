import {assert} from 'chai';
import {showResults} from './showResults';

const getPlayerResult = (score, notes, time) => ({score, notes, time});

const mockStats = [4, 6, 7, 8, 10, 11, 15, 16, 19, 20];

const timeoutMessage = `Время вышло! Вы не успели отгадать все мелодии`;
const noLivesMessage = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;

describe(`results output`, () => {
  it(`returns correct message for win`, () => {
    assert.equal(`Вы заняли 3 место из 11 игроков. Это лучше, чем у 80% игроков`,
        showResults(mockStats, getPlayerResult(17, 3, 100)));
    assert.equal(`Вы заняли 7 место из 11 игроков. Это лучше, чем у 40% игроков`,
        showResults(mockStats, getPlayerResult(9, 3, 100)));
    assert.equal(`Вы заняли 11 место из 11 игроков.`,
        showResults(mockStats, getPlayerResult(3, 3, 100)));
    assert.equal(`Вы заняли 1 место из 11 игроков.`,
        showResults(mockStats, getPlayerResult(21, 3, 100)));
  });
  it(`returns correct message for timeout`, () => {
    assert.equal(timeoutMessage, showResults(mockStats, getPlayerResult(5, 3, 0)));
    assert.equal(timeoutMessage, showResults(mockStats, getPlayerResult(4, 2, 0)));
    assert.equal(timeoutMessage, showResults(mockStats, getPlayerResult(7, 1, 0)));
  });
  it(`returns correct message if player runs out of lives`, () => {
    assert.equal(noLivesMessage, showResults(mockStats, getPlayerResult(5, 0, 15)));
    assert.equal(noLivesMessage, showResults(mockStats, getPlayerResult(1, 0, 55)));
    assert.equal(noLivesMessage, showResults(mockStats, getPlayerResult(3, 0, 105)));
  });
});
