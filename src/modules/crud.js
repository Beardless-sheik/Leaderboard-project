const addScore = (name, score, scoresArray) => {
  const newScoreObject = {
    name,
    score,
  };
  return [...scoresArray, newScoreObject];
};

export default addScore;