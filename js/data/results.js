import data from '../data/data.js';
/* import calculateScore from '../logic/calculateScore.js';
import showResults from '../logic/showResults.js';
import {mockStats, QUICK_ANSWER_MAX_TIME} from './commonConst';*/

/* const SECONDS_IN_MINUTE = 60;
let time = {
  seconds: null,
  minutes: null
};
const updateTime = () => {
  time.minutes = Math.floor(data.time / SECONDS_IN_MINUTE);
  time.seconds = data.time % SECONDS_IN_MINUTE;
};
updateTime();*/

/* const getQuickAnshwers = () => {
  return data.answers.reduce((it, total) => {
    if (it.isCorrect) {
      if (it.time <= QUICK_ANSWER_MAX_TIME) {
        return total + 1;
      }
    }
  }, 0);
};*/

export default () => {
  return {
    win: {
      title: `Вы настоящий меломан!`,
      stats: `За&nbsp;${``}&nbsp;минуты и ${``}&nbsp;секунд
    <br>вы&nbsp;набрали ${``} баллов (${``} быстрых)
    <br>совершив ${data.errors} ошибки`,
      comparison: `${``}`,
      replay: `Сыграть ещё раз`
    },
    timeout: {
      title: `Увы и ах!`,
      stats: `Время вышло!<br>Вы не успели отгадать все мелодии`,
      comparison: null,
      replay: `Попробовать ещё раз`
    },
    fail: {
      title: `Какая жалость!`,
      stats: `У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!`,
      comparison: null,
      replay: `Попробовать ещё раз`
    }
  };
};

