import {MAX_LIVES, MAX_ANSWERS, QUICK_ANSWER_MAX_TIME} from '../data/commonConst';

const LONG_ANSWER_VALUE = 1;
const QUICK_ANSWER_VALUE = 2;
const WRONG_ANSWER_VALUE = -2;
const ERROR_CODE = -1;

export const calculateScore = (answers, notes) => {
  if (answers.length !== MAX_ANSWERS || notes >= MAX_LIVES) {
    return ERROR_CODE;
  }
  return answers.reduce((total, it) => {
    if (it.isCorrect) {
      if (it.time > QUICK_ANSWER_MAX_TIME) {
        return total + LONG_ANSWER_VALUE;
      }
      if (it.time <= QUICK_ANSWER_MAX_TIME) {
        return total + QUICK_ANSWER_VALUE;
      }
    }
    return total + WRONG_ANSWER_VALUE;
  }, 0);
};
