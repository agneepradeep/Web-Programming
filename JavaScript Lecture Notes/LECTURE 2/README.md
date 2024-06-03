# JavaScript Notes

## Comments

- **Single Line Comment**
  ```javascript
  // This is a single line comment


- **Multi-Line Comment**
  ```javascript
  /** This is a multi-line
   * comment
  */
  ```

## Operators in JavaScript

### Arithmetic Operators
- `+` (Addition)
- `-` (Subtraction)
- `*` (Multiplication)
- `/` (Division)

### Modulus
- `%` (Remainder)

### Exponentiation
- `**` (Power)

### Increment
- `++` (Unary Operator)

### Decrement
- `--` (Unary Operator)

### Example Usage
```javascript
let a = 5;
let b = 10;
console.log("A + B = ", a + b); // 15
console.log("A - B = ", a - b); // -5  
console.log("A * B = ", a * b); // 50
console.log("A / B = ", a / b); // 0.5
console.log("A % B = ", a % b); // 5
console.log("A^B = ", a ** b); // 5^10
```

### Increment and Decrement
```javascript
a++; // a++ == a + 1 
a--; // a-- == a - 1

console.log("a++ = ", a++); // 5
console.log("a = ", a); // 6

a = 5;
console.log("++a = ", ++a); // 6
console.log("a = ", a); // 6
```

## Assignment Operators
- `=`
- `+=`
- `-=`
- `%=`
- `**=`

## Comparison Operators
- Equal to: `==`
- Not Equal to: `!=`
- Equal to and type: `===`
- Not equal to and type: `!==`
- Greater Than: `>`
- Greater Than or equal to: `>=`
- Less Than: `<`
- Less Than or equal to: `<=`

### Example Usage
```javascript
let a = 5; // Integer
let b = "5"; // String

console.log(a == b); // true
console.log(a === b); // false
console.log(a !== b); // true
```

## Logical Operators
- Logical AND: `&&`
- Logical OR: `||`
- Logical NOT: `!`

## Conditional Statements
- `if`
- `if-else`
- `if-else if-else`
- `switch`

### Example Usage
```javascript
if (condition) {
  // statement
} else if (anotherCondition) {
  // another statement
} else {
  // default statement
}
```

## Ternary Operator
- Syntax: `Condition ? true output : false output`

### Example Usage
```javascript
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Yes
```
```

This `README.md` file includes sections for comments, operators, conditional statements, and the ternary operator, along with explanations and code snippets.
