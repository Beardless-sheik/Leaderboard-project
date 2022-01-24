import './style.css';
import { saveToLocalStorage, retrieveFromLocalStorage } from './modules/localStorage.js';
import renderScores from './modules/render.js';

const scoreForm = document.querySelector('.form-container');
const nameInput = document.querySelector('#userName');
const scoreInput = document.querySelector('#userScore');
const scoreUlContainer = document.querySelector('#results-container');

const scoresArray = [];

renderScores(scoresArray, scoreUlContainer);

const submitFormFunction = (event) => {
  // event.preventDefault();
  // console.log(nameInput.value, scoreInput.value);
  // scoreForm.reset();
}

scoreForm.addEventListener('submit', submitFormFunction);
// window.addEventListener('load', () => {
//   scoresArray
// })