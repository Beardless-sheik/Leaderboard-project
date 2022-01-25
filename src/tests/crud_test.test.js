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

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(USERS),
}));

const gameID = 'BiDiHwt6He2xszZxawvN/'; // Testing Game ID
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;

describe('tests for the addScore asynchronous function', () => {
  test('the data returns an array of 3 objects in the database', async (url) => {
    const result = await getScores(url);
    console.log(result);
  });
});