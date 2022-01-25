const saveToLocalStorage = (scoresArray) => {
  localStorage.setItem('leadershipScores', JSON.stringify(scoresArray));
};

const retrieveFromLocalStorage = () => {
  let newStorageScores = [];
  const data = localStorage.getItem('leadershipScores');
  if (data) {
    newStorageScores = JSON.parse(data);
  }
  return newStorageScores;
};

export { saveToLocalStorage, retrieveFromLocalStorage };