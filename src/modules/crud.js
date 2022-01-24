const addScore = async (name, score, apiEndPoint, idLink, htmlElementToPostSuccesfulMessage) => {
  const url = `${apiEndPoint}${idLink}scores/`;
  const newScoreObject = {
    user: name,
    score,
  };
  let responseFromServer = '';
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(newScoreObject),
    headers: {
      'Content-type': 'application/json',
    },
  }).then((response) => {
    const data = response.json();
    responseFromServer = data.result;
  }).catch((error) => {
    responseFromServer = error.message;
  });
  htmlElementToPostSuccesfulMessage.innerHTML = responseFromServer;
  setTimeout(() => {
    htmlElementToPostSuccesfulMessage.innerHTML = '';
  }, 6000);
};

const getScores = async (apiEndPoint, idLink, htmlElementToPostSuccesfulMessage) => {
  const url = `${apiEndPoint}${idLink}scores/`;
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      htmlElementToPostSuccesfulMessage.innerHTML = 'Scores collected from the server (server message to disappear in 5 sec)';
      console.log(data.result);
      return data.result;
    })
    .catch((error) => {
      console.log(error);
      htmlElementToPostSuccesfulMessage.innerHTML = 'error connecting to the server';
    });
  setTimeout(() => {
    htmlElementToPostSuccesfulMessage.innerHTML = '';
    console.log('remove error message');
  }, 6000);
  if (response === undefined) {
    return [{
      name: 'Failed to connect to server to get Names',
      score: 'Failed to connect to server to get Scores',
    }];
  }
  return response;
};

export { addScore, getScores };