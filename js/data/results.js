import {data} from './data.js';
import {showResults} from '../logic/showResults.js';
import constants from './constants.js';
import calculate from '../logic/calculate';

const SECONDS_IN_MINUTE = 60;
const mockTime = {
  minutes: Math.floor(data.time / SECONDS_IN_MINUTE),
  seconds: data.time % SECONDS_IN_MINUTE
};

export default () => {
  return {
    win: {
      title: `Вы настоящий меломан!`,
      stats: `За&nbsp;${mockTime.minutes}&nbsp;минуты и ${mockTime.seconds}&nbsp;секунд
    <br>вы&nbsp;набрали ${calculate.score(data.answers, data.errors)} баллов (${calculate.quickAnswers(data.answers)} быстрых)
    <br>совершив ${data.errors} ошибки`,
      comparison: showResults(constants.MOCK_STATS, data.answers),
      replay: `Сыграть ещё раз`
    },
    timeout: {
      title: `Увы и ах!`,
      stats: `Время вышло!<br>Вы не успели отгадать все мелодии`,
      replay: `Попробовать ещё раз`
    },
    fail: {
      title: `Какая жалость!`,
      stats: `У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!`,
      replay: `Попробовать ещё раз`
    }
  };
};
