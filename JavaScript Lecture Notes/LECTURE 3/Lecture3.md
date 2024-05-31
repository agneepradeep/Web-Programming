# JavaScript Loops and Strings

## Loops in JavaScript

### For Loop
The `for` loop is used for repeating a block of code a specified number of times.
```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Agneepradeep Verma");
}
console.log(i); // Error: i is in block scope

for (var i = 1; i <= 5; i++) {
    console.log("Agneepradeep Verma");
}
console.log(i); // Outputs: 6 (global scope)
```

### Infinite Loop (Not Recommended)
An example of an infinite loop, which is generally discouraged:
```javascript
for (let i = 1; i >= 0; i++) {
    // statement
}
```

### While Loop
The `while` loop executes a block of code as long as a specified condition is true.
```javascript
while (condition) {
    // Statements
}
```

### Do-While Loop
The `do-while` loop executes a block of code once, before checking if the condition is true, then repeats the loop as long as the condition is true.
```javascript
do {
    // Statements
} while (condition);
```

### For-Of Loop
The `for-of` loop is used for iterating over iterable objects like arrays and strings.
```javascript
let a = "Agneepradeep Verma";
for (let i of a) {
    console.log(i);
}
```

### For-In Loop
The `for-in` loop is used for iterating over the properties of an object.
```javascript
let student = {
    name: "Agneepradeep",
    age: 20,
    cgpa: 7.6
};

for (let i in student) {
    console.log(i, ":", student[i]);
}
```

## Strings in JavaScript

### String Declaration
Strings can be declared using double quotes, single quotes, or backticks.
```javascript
let s = "Agneepradeep"; // Double quotes
let b = 'Agneepradeep'; // Single quotes
let a = `Agneepradeep`; // Backticks
```
### String Properties
To get the length of a string:
```javascript
s.length; // 12
```
To access characters by index:
```javascript
s[0], s[1], s[2]; // Index addressing
```

### Template Literals
Template literals allow for embedding expressions within string literals.
```javascript
let obj = {
    name: "Agneepradeep Verma",
    age: 22
};

let output = `My Name is ${obj.name} and my age is ${obj.age}`;
console.log(output); // Outputs: My Name is Agneepradeep Verma and my age is 22
```

### Escape Characters
Escape characters count only as a single character during string length functions.
```plaintext
\n - newline
\t - tab
```

### String Built-in Methods
JavaScript provides several built-in methods for strings:
```javascript
str.toUpperCase(); // Creates a new string with all uppercase letters
str.toLowerCase(); // Creates a new string with all lowercase letters
str.trim(); // Removes whitespace from both ends of a string
str.slice(start, end); // Extracts a section of a string (not including the end index)
str1.concat(str2); // Concatenates two strings
str.replace(searchVal, newVal); // Replaces the first match of searchVal with newVal
str.charAt(index); // Returns the character at the specified index
```

### Note
Strings are immutable in JavaScript, meaning they cannot be changed once created. However, you can create a new string by using methods like `replace()` to achieve the desired changes.
