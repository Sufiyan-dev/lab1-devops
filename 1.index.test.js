const add = require('./1.index');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(4);
});