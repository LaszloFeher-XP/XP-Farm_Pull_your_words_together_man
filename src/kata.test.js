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

  test('GIVEN ["FIELDS","of","CORN","are","to","be","sown"] WHEN runs logic THEN returns `FIELDS of CORN are to be sown.`', () => {
    const kata = new Kata();
    expect(kata.sentencify(["FIELDS", "of", "CORN", "are", "to", "be", "sown"])).toStrictEqual('FIELDS of CORN are to be sown.');
  });
});




