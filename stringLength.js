const testString1 = "Hello";
const expectedLength1 = 5;

if (stringLength(testString1) !== expectedLength1) {
  console.error("Test failed: unexpected string length");
}

const testString2 = "";

try {
  stringLength(testString2);
  console.error("Test failed: expected error not thrown");
} catch (error) {
  if (error.message !== "String must be at least 1 character long") {
    console.error("Test failed: unexpected error message");
  }
}

const testString3 = "This is a very long string";

try {
  stringLength(testString3);
  console.error("Test failed: expected error not thrown");
} catch (error) {
  if (error.message !== "String must not be longer than 10 characters") {
    console.error("Test failed: unexpected error message");
  }
}


function stringLength(string) {
  const length = string.length;

  if (length < 1) {
    throw new Error("String must be at least 1 character long");
  }

  if (length > 10) {
    throw new Error("String must not be longer than 10 characters");
  }

  return length;
}

