import {MAX_ANSWERS} from './commonConst';

const mockArtistQuestion = {
  question: {
    type: `artist`,
    audio: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`
  },
  answers: [
    {
      artist: `Audionautix`,
      imageSrc: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
      isCorrect: false
    },
    {
      artist: `Kevin MacLeod`,
      imageSrc: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
      isCorrect: true
    },
    {
      artist: `Riot`,
      imageSrc: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
      isCorrect: false
    }
  ]
};

const mockGenreQuestion = {
  question: {
    type: `genre`,
    genre: `Rock`
  },
  answers: [
    {
      audio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
      isCorrect: true
    },
    {
      audio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
      isCorrect: true
    },
    {
      audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      isCorrect: false
    },
    {
      audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      isCorrect: false
    }
  ]
};

const questions = [];

const getRndQuestion = () => {
  const randomInt = Math.round(Math.random());
  if (randomInt === 1) {
    return mockArtistQuestion;
  }
  return mockGenreQuestion;
};

questions.push(mockArtistQuestion);
questions.push(mockGenreQuestion);

for (let i = 0; i < MAX_ANSWERS - 2; i++) {
  questions.push(getRndQuestion());
}

export default questions;
