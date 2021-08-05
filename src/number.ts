export function add(num1, num2) {
  return num1 + num2;
}

export function subtract(num1, num2) {
  return num1 - num2;
}

export function multiply(num1, num2) {
  return num1 * num2;
}

export function divide(num1, num2) {
  return num1 / num2;
}

export function squareRoot(num) {
  return num ** 2;
}

export function calculateGoodTip(num) {
  return (num * 0.2).toPrecision(3);
}

export function stringParserInt(str) {
  return parseInt(str);
}

export function stringParserFloat(str) {
  return parseFloat(str);
}

export function forceNumberType(str) {
  return Number(str);
}

export function roll6D() {
  return parseInt((Math.random() * 6).toPrecision(1));
}
