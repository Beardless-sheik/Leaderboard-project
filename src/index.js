import './style.css';
import { saveToLocalStorage, retrieveFromLocalStorage } from './modules/localStorage.js';
import renderScores from './modules/render.js';
import addScore from './modules/crud.js';

const scoreForm = document.querySelector('.form-container');
const nameInput = document.querySelector('#userName');
const scoreInput = document.querySelector('#userScore');
const scoreUlContainer = document.querySelector('#results-container');

let scoresArray = [];

const submitFormFunction = (event) => {
  event.preventDefault();
  scoresArray = addScore(nameInput.value, scoreInput.value, scoresArray);
  saveToLocalStorage(scoresArray);
  renderScores(scoresArray, scoreUlContainer);
  scoreForm.reset();
};

scoreForm.addEventListener('submit', submitFormFunction);
window.addEventListener('load', () => {
  scoresArray = retrieveFromLocalStorage();
  renderScores(scoresArray, scoreUlContainer);
});