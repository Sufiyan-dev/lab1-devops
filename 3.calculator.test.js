// calculator.test.js
const calculator = require('./3.calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 4 - 2 to equal 2', () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test('multiplies 3 * 5 to equal 15', () => {
  expect(calculator.multiply(3, 5)).toBe(15);
});
