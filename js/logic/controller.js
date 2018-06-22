import {data, initialState} from '../data/data.js';
import questions from '../data/questions';
import gameArtist from '../screens/game-artist';
import gameGenre from '../screens/game-genre';

export const resetData = () => {
  data.time = initialState.time;
  data.currentQuestion = initialState.currentQuestion;
  data.errors = initialState.errors;
  data.answers = initialState.answers;
  console.log(data);
};

export const getGameScreen = () => {
  if (questions[data.currentQuestion].question.type === `artist`) {
    return gameArtist();
  }
  return gameGenre();
};

export const incrementQuestionCounter = () => {
  data.currentQuestion += 1;
};

export const pushAnswer = (answer) => {
  data.answers.push(answer);
};
