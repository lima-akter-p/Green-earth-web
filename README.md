

---
#### 7) Create a README file to answer the following question-

### 1) What is the difference between var, let, and const?

 Ans: | Feature        | `var`                             | `let`                    | `const`                                              |
| -------------- | --------------------------------- | ------------------------ | ---------------------------------------------------- |
| Scope          | Function/global                   | Block                    | Block                                                |
| Hoisting       | Yes (initialized with undefined)  | Yes (temporal dead zone) | Yes (temporal dead zone)                             |
| Re-declaration | Yes                               | No                       | No                                                   |
| Re-assignment  | Yes                               | Yes                      | No                                                   |
| Useful for     | Legacy code or function-wide vars | Variables that change    | Constants or objects/arrays that shouldn’t re-assign |

     

 ### 2) What is the difference between map(), forEach(), and filter()? 
  Ans: 
      | Method    | Returns   | Purpose                      | Original Array Changed? |
| --------- | --------- | ---------------------------- | ----------------------- |
| `forEach` | undefined | Perform action for each item | ❌ No                    |
| `map`     | new array | Transform each element       | ❌ No                    |
| `filter`  | new array | Keep elements that pass test | ❌ No                    |




 ### 3) What are arrow functions in ES6?
 Ans: 
     In ES6 (ECMAScript 2015), arrow functions are a concise way to write functions in JavaScript. They provide a shorter syntax than traditional functions and have a few special behaviors, especially regarding this.

1. Syntax

Arrow functions use the => (arrow) notation:

// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => {
  return a + b;
};

// If the function has a single expression,  omit braces and return
const add = (a, b) => a + b;


Single parameter: parentheses are optional

const square = x => x * x;


No parameters: use empty parentheses

const greet = () => console.log("Hello!");


Returning an object: wrap in parentheses

const createUser = (name, age) => ({ name, age });

#### 4) How does destructuring assignment work in ES6?
 Ans:
     1. Array Destructuring

You can unpack values from arrays into variables:

const numbers = [10, 20, 30];

// Basic destructuring
const [a, b, c] = numbers;
console.log(a, b, c); // 10 20 30

// Skipping elements
const [x, , z] = numbers;
console.log(x, z); // 10 30

// Default values
const [p, q, r, s = 40] = numbers;
console.log(p, q, r, s); // 10 20 30 40

2. Object Destructuring

You can extract properties from objects:

const person = { name: "Alice", age: 25, city: "Dhaka" };

// Basic destructuring
const { name, age } = person;
console.log(name, age); // Alice 25

// Assigning to new variable names
const { name: n, age: a } = person;
console.log(n, a); // Alice 25

// Default values
const { name: userName, country = "Bangladesh" } = person;
console.log(userName, country); // Alice Bangladesh

3. Nested Destructuring

You can destructure nested arrays or objects:

const data = {
  id: 1,
  info: { email: "alice@example.com", phone: "12345678" }
};

const { info: { email, phone } } = data;
console.log(email, phone); // alice@example.com 12345678

const arr = [1, [2, 3], 4];
const [one, [two, three], four] = arr;
console.log(one, two, three, four); // 1 2 3 4

4. Function Parameters Destructuring

You can destructure arguments directly in function parameters:

function greet({ name, age }) {
  console.log(`Hello ${name}, age ${age}`);
}

const person = { name: "Bob", age: 30 };
greet(person); // Hello Bob, age 30

// Array parameter destructuring
function sum([x, y]) {
  return x + y;
}
console.log(sum([5, 10])); // 15



### 5) Explain template literals in ES6. How are they different from string concatenation?

 Ans:
    1. Syntax

Template literals are enclosed by backticks (`) instead of quotes:

const name = "Alice";
const age = 25;

// Using template literals
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);
// Output: Hello, my name is Alice and I am 25 years old.


${expression} allows embedding any JavaScript expression directly inside the string.

2. Multi-line Strings

With template literals, you can create multi-line strings without using \n:

const message = `This is a
multi-line
string.`;

console.log(message);
/* Output:
This is a
multi-line
string.
*/

3. Expressions and Functions

You can use arithmetic, function calls, or any expressions inside ${}:

const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}`); 
// Output: The sum of 5 and 10 is 15

function greet(name) {
  return `Hi ${name}!`;
}
console.log(`Message: ${greet("Bob")}`); 
// Output: Message: Hi Bob!

4. Difference from String Concatenation
Feature	String Concatenation	Template Literals
Syntax	"Hello " + name + "!"	`Hello ${name}!`
Multi-line strings	Use \n or +	Directly supported with backticks
Expressions in strings	Need + to join values	${expression} allows direct embedding
Readability	Less readable for complex strings	Cleaner and easier to read

Example:

// Concatenation
const name = "Alice";
const age = 25;
const greeting1 = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log(greeting1);

// Template literal
const greeting2 = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting2);


Output for both is the same, but template literals are much cleaner, especially for multi-line or dynamic strings.



