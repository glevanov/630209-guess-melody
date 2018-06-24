import {data, initialState} from '../data/data.js';
import questions from '../data/questions';
import gameArtist from '../screens/game-artist';
import gameGenre from '../screens/game-genre';

export const resetData = () => {
  data.time = initialState.time;
  data.errors = initialState.errors;
  data.answers = initialState.answers;
};

export const getQuestionIndex = () => {
  if (data.answers.length === 0) {
    return 0;
  }
  return data.answers.length - 1;
};

export const getGameScreen = () => {
  if (questions[getQuestionIndex()].question.type === `artist`) {
    return gameArtist();
  }
  return gameGenre();
};

export const pushAnswer = (answer) => {
  data.answers.push(answer);
};
