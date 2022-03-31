const { Kata } = require('./kata');

describe('First story', () => {
  test('GIVEN ["i", "am", "an", "AI"] WHEN runs logic THEN returns `I am an AI.`', () => {
    const kata = new Kata();
    expect(kata.sentencify(["i", "am", "an", "AI"])).toStrictEqual('I am an AI.');
  });

  test('GIVEN ["yes"] WHEN runs logic THEN returns `Yes.`', () => {
    const kata = new Kata();
    expect(kata.sentencify(["yes"])).toStrictEqual('Yes.');
  });
});




