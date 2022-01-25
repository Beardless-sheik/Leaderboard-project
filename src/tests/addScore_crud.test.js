import { addScore } from '../modules/crud.js';

const RESULT = {
  result: 'created succesfully',
};

const gameID = 'BiDiHwt6He2xszZxawvN/'; // Testing Game ID
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/'; // games/${gameID}/scores/`;

describe('tests for the addScore asynchronous function', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(RESULT),
  }));
  let result;
  const element = document.createElement('div');
  beforeEach(async () => {
    result = await addScore('alick', 100, url, gameID, element);
  });

  test('check if succesful message is given upon API return message', () => {
    expect(result).toBe('created succesfully');
  });
});