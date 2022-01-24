const addScore = async (name, score, apiEndPoint, idLink, htmlElementToPostSuccesfulMessage) => {
  const newScoreObject = {
    user: name,
    score,
  };
  let responseFromServer = ''
  await fetch(`${apiEndPoint}${idLink}/scores/`, {
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
};

export default addScore;