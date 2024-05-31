# Lecture 1 Notes

## Variables

- **var**: 
  - Variable can be re-declared & updated.
  - A global scope Variable.
  
- **let**: 
  - Variable cannot be re-declared but can be updated.
  - A block scope Variable.
  
- **const**: 
  - Variable cannot be re-declared or updated.
  - A block scope Variable.

> **Note**: For a good programmer, avoid using `var`.

## Data Types in JavaScript

- Number
- String
- Boolean
- Undefined
- Null
- BigInt
- Symbol

To know the type of a variable, use `typeof variableName`.

## Example Objects

### Student Object

```javascript
const student = {
    fullName: "Agneepradeep Verma",
    age: 22,
    cgpa: 8.97
};

// Accessing properties
console.log(student["fullName"]); // prints "Agneepradeep Verma"
console.log(student.age); // prints 22

// Updating a property
student["age"] += 1;
