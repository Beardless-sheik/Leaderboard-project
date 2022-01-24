const addScore = async (name, score, apiEndPoint, idLink, htmlElementToPostSuccesfulMessage) => {
  const url = `${apiEndPoint}${idLink}scores/`;
  const newScoreObject = {
    user: name,
    score,
  };
  let responseFromServer = '';
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newScoreObject),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    responseFromServer = data.result;
  } catch (error) {
    responseFromServer = error.message;
  }
  htmlElementToPostSuccesfulMessage.innerHTML = responseFromServer;
  setTimeout(() => {
    htmlElementToPostSuccesfulMessage.innerHTML = '';
  }, 6000);
};

const getScores = async (apiEndPoint, idLink, htmlElementToPostSuccesfulMessage) => {
  const url = `${apiEndPoint}${idLink}scores/`;
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
    htmlElementToPostSuccesfulMessage.innerHTML = 'Scores collected from the server (server message to disappear in 5 sec)';
  } catch (error) {
    htmlElementToPostSuccesfulMessage.innerHTML = 'error connecting to the server';
  }
  setTimeout(() => {
    htmlElementToPostSuccesfulMessage.innerHTML = '';
  }, 6000);
  if (data === undefined) {
    return [{
      name: 'Failed to connect to server to get Names',
      score: 'Failed to connect to server to get Scores',
    }];
  }
  return data.result;
};

export { addScore, getScores };