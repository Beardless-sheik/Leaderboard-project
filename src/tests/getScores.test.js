import { getScores } from '../modules/crud.js';

const USERS = {
  result: [
    {
      user: 'John Doe',
      score: 42,
    },
    {
      user: 'Peter Parker',
      score: 35,
    },
    {
      user: 'Wonder Woman',
      score: 50,
    },
  ],
};

const gameID = 'BiDiHwt6He2xszZxawvN/'; // Testing Game ID
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/'; // games/${gameID}/scores/`;

describe('tests for the getScores asynchronous function', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(USERS),
  }));
  let result;
  const element = document.createElement('div');
  beforeEach(async () => {
    result = await getScores(url, gameID, element);
  });

  test('the data returns an array of 3 objects in the database', async () => {
    expect(result.length).toBe(3);
  });
});