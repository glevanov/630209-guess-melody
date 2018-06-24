import constants from '../data/constants';

const LONG_ANSWER_VALUE = 1;
const QUICK_ANSWER_VALUE = 2;
const WRONG_ANSWER_VALUE = -2;
const ERROR_CODE = -1;

export default {
  score: (answers, notes) => {
    if (answers.length !== constants.MAX_ANSWERS || notes >= constants.MAX_LIVES) {
      return ERROR_CODE;
    }
    return answers.reduce((total, it) => {
      if (it.isCorrect) {
        if (it.time > constants.QUICK_ANSWER_MAX_TIME) {
          return total + LONG_ANSWER_VALUE;
        }
        if (it.time <= constants.QUICK_ANSWER_MAX_TIME) {
          return total + QUICK_ANSWER_VALUE;
        }
      }
      return total + WRONG_ANSWER_VALUE;
    }, 0);
  },
  quickAnswers: (answers) => {
    return answers.reduce((total, it) => {
      if (it.isCorrect) {
        if (it.time <= constants.QUICK_ANSWER_MAX_TIME) {
          return total++;
        }
      }
      return total;
    }, 0);
  }
};
