const testString = "Hello, world!";
const expectedOutput = "!dlrow ,olleH";

if (reverseString(testString) !== expectedOutput) {
  console.error("Test failed: unexpected output");
}

function reverseString(string) {
  return string.split("").reverse().join("");
}
