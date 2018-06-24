import {data, initialState} from '../data/data.js';
import questions from '../data/questions';
import gameArtist from '../screens/game-artist';
import gameGenre from '../screens/game-genre';
import resultFail from '../screens/result-fail';
import resultTimeout from '../screens/result-timeout';
import resultWin from '../screens/result-win';
import {MAX_ANSWERS, MAX_LIVES} from '../data/commonConst';

export const getQuestionIndex = () => {
  if (data.answers.length === 0) {
    return 0;
  }
  return data.answers.length - 1;
};

export default {
  resetData: () => {
    data.time = initialState.time;
    data.errors = initialState.errors;
    data.answers = initialState.answers;
  },
  updateErrorCount: (answer) => {
    if (!answer.isCorrect) {
      data.errors += 1;
    }
  },
  getGameScreen: () => {
    if (data.errors === MAX_LIVES) {
      return resultFail;
    }
    if (data.time === 0) {
      return resultTimeout;
    }
    if (data.answers.length === MAX_ANSWERS) {
      return resultWin();
    }
    if (questions[getQuestionIndex()].question.type === `artist`) {
      return gameArtist();
    }
    return gameGenre();
  },
  pushAnswer: (answer) => {
    data.answers.push(answer);
  }
};
