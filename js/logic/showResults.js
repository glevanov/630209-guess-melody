export const showResults = (otherResults, playerResult) => {
  if (playerResult.time <= 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }
  if (playerResult.notes <= 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  const playerScore = playerResult.score;
  const statistics = otherResults.slice();
  statistics.push(playerScore);
  statistics.sort((a, b) => a - b);
  const totalPlayers = statistics.length;
  const scoreIndex = statistics.indexOf(playerScore);
  const place = totalPlayers - scoreIndex;
  const playerPercentage = scoreIndex / otherResults.length * 100;

  if (place === totalPlayers || place === 1) {
    return `Вы заняли ${place} место из ${totalPlayers} игроков.`;
  }

  return `Вы заняли ${place} место из ${totalPlayers} игроков. Это лучше, чем у ${playerPercentage}% игроков`;
};
