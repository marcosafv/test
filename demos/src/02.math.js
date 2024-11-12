// this is a sum
function sum(a, b) {
  return a + b;
}

// this is a subtract
function subtract(a, b) {
  return a - b;
}

// this is a multiply
function multiply(a, b) {
  return a * b;
}

// this is a divide
function divide(a, b) {
  if(b === 0) return null;
  return a / b;
}

module.exports = {
  sum,
  subtract,
  multiply,
  divide,
};
