const MAX_ANSWERS = 10;
const QUICK_ANSWER_MAX_TIME = 29;
const LONG_ANSWER_VALUE = 1;
const QUICK_ANSWER_VALUE = 2;
const WRONG_ANSWER_VALUE = -2;
const ERROR_CODE = -1;

export const calculateScore = (answers, notes) => {
  if (answers.length !== MAX_ANSWERS || notes >= 3) {
    return ERROR_CODE;
  }

  return answers.reduce((total, it) => {
    if (it.isCorrect && it.time > QUICK_ANSWER_MAX_TIME) {
      total += LONG_ANSWER_VALUE;
    }
    if (it.isCorrect && it.time <= QUICK_ANSWER_MAX_TIME) {
      total += QUICK_ANSWER_VALUE;
    }
    if (!it.isCorrect) {
      total += WRONG_ANSWER_VALUE;
    }
    return total;
  }, 0);
};
