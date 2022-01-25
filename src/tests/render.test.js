import renderScores from '../modules/render.js';

const scoresArray = [
  {
    user: 'alick',
    score: 90,
  },
  {
    user: 'john',
    score: 100,
  },
];

describe('tests for the renderScores function', () => {
  const element = document.createElement('div');

  test('check whether <li> elements will be placed correctly', () => {
    renderScores(scoresArray, element);
    expect(element.innerHTML).toBe(
      '<li> alick: 90 </li><li class="colured-background"> john: 100 </li>',
    );
  });
});