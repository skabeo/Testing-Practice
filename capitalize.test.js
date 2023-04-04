const capitalize = require('./capitalize.js');

test('capitalize the first character of a string', () => {
  const result = capitalize('hello world');
  expect(result).toBe('Hello world');
});