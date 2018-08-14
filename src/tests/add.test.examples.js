const add = (a, b) => a + b;
const generateGreeting = (name = 'anonymous') => `hello ${name}`;

// Uses 2 required argumemts
// First argument is a name
// Second argument is the code to run for the test case
// ALWAYS pass in a string (name) as the first argument
// ALWAYS pass in an arrow function as the second argument
test('should add two numbers', () => {
  const result = add(3, 4);

//  if (result !== 7) {
//    throw new Error(`You added 4 and 3.  The result was ${result}. Expected 7.`)
//  }

  expect(result).toBe(7);

});

test('should generate greeting from name', () => {
  const result = generateGreeting('roger');
  expect(result).toBe('hello roger');
});

test('should generate greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('hello anonymous');
});

