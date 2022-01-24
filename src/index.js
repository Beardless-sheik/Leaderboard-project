import './style.css';
import renderScores from './modules/render.js';
import { addScore, getScores } from './modules/crud.js';

const gameID = 'Bus6JlqV8NG7oMQ0k9es/';
const apiEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const serverMessageElement = document.querySelector('#space-for-server-message');
const scoreForm = document.querySelector('.form-container');
const nameInput = document.querySelector('#userName');
const scoreInput = document.querySelector('#userScore');
const scoreUlContainer = document.querySelector('#results-container');
const refreshButton = document.querySelector('#refresh-button');

let scoresArray = [];

const submitFormFunction = async (event) => {
  event.preventDefault();
  await addScore(nameInput.value, scoreInput.value, apiEndPoint, gameID, serverMessageElement);
  scoresArray = await getScores(apiEndPoint, gameID, serverMessageElement);
  renderScores(scoresArray, scoreUlContainer);
  scoreForm.reset();
};

const refreshScore = async (event) => {
  event.preventDefault();
  scoresArray = await getScores(apiEndPoint, gameID, serverMessageElement);
  renderScores(scoresArray, scoreUlContainer);
};

scoreForm.addEventListener('submit', submitFormFunction);
refreshButton.addEventListener('click', refreshScore)
window.addEventListener('load', async () => {
  scoresArray = await getScores(apiEndPoint, gameID, serverMessageElement);
  renderScores(scoresArray, scoreUlContainer);
});