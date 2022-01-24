import './style.css';
import { saveToLocalStorage, retrieveFromLocalStorage } from './modules/localStorage.js';
import renderScores from './modules/render.js';
import { addScore, getScores } from './modules/crud.js';

const gameID = 'Bus6JlqV8NG7oMQ0k9es/';
const apiEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const serverMessageElement = document.querySelector('#space-for-server-message');
const scoreForm = document.querySelector('.form-container');
const nameInput = document.querySelector('#userName');
const scoreInput = document.querySelector('#userScore');
const scoreUlContainer = document.querySelector('#results-container');

let scoresArray = [];

const submitFormFunction = async (event) => {
  event.preventDefault();
  await addScore(nameInput.value, scoreInput.value, apiEndPoint, gameID, serverMessageElement);
  // saveToLocalStorage(scoresArray);
  scoresArray = await getScores(apiEndPoint, gameID, serverMessageElement);
  renderScores(scoresArray, scoreUlContainer);
  scoreForm.reset();
};

scoreForm.addEventListener('submit', submitFormFunction);
window.addEventListener('load', async() => {
  // scoresArray = retrieveFromLocalStorage();
  scoresArray = await getScores(apiEndPoint, gameID, serverMessageElement);
  console.log(scoresArray);
  renderScores(scoresArray, scoreUlContainer);
});