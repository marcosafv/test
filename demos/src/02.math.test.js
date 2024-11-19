const { sum, subtract, multiply, divide } = require('./02.math');

test('adds 1 + 3 to equal 4', () => {
  const adds = sum(1, 3);
  expect(adds).toBe(4);
});

test('subtracts 4 - 2 to equal 2', () => {
  expect(subtract(4, 2)).toBe(2);
});

test('multiplies 6 * 2 to equal 12', () => {
  expect(multiply(6, 2)).toBe(12);
});

test('divides 10 / 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
  expect(divide(5, 0)).toBeNull();
});
