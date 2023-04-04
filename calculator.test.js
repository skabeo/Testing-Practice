const Calculator = require('./calculator.js');

describe('Calculator', () => {
  describe('add', () => {
    test('adds two positive numbers', () => {
      const calculator = new Calculator();
      expect(calculator.add(2, 3)).toEqual(5);
    })

    test('add two negative numbers', () => {
      const calculator = new Calculator();
      expect(calculator.add(-2, -3)).toEqual(-5);
    })

    test('add a positive and negative number', () => {
      const calculator = new Calculator();
      expect(calculator.add(2, -3)).toEqual(-1);
    })
  })

  describe('subtract', () => {
    test('subtract two positive numbers', () => {
      const calculator = new Calculator();
      expect(calculator.subtract(5, 2)).toEqual(3);
    })

    test('subtract two negative numbers', () => {
      const calculator = new Calculator();
      expect(calculator.subtract(-5, -2)).toEqual(-3);
    })

    test('subtract a negative number from a positive number', () => {
      const calculator = new Calculator();
      expect(calculator.subtract(5, -2)).toEqual(7);
    })
  })

  describe('multiply', () => {
    test('multiply two positive numbers', () => {
      const calculator = new Calculator();
      expect(calculator.multiply(2, 3)).toEqual(6);
    })

    test('multiply two negative numbers', () => {
      const calculator = new Calculator();
      expect(calculator.multiply(-2, -3)).toEqual(6);
    })

    test('multiply a positive number and a negative number', () => {
      const calculator = new Calculator();
      expect(calculator.multiply(2, -3)).toEqual(-6);
    })
  })

  describe('divide', () => {
    test('divide two positive numbers', () => {
      const calculator = new Calculator();
      expect(calculator.divide(6, 2)).toEqual(3);
    })

    test('divide two negative numbers', () => {
      const calculator = new Calculator();
      expect(calculator.divide(-6, -2)).toEqual(3);
    })

    test('divide a positive number by a negative number', () => {
      const calculator = new Calculator();
      expect(calculator.divide(6, -2)).toEqual(-3);
    })
  })
})