# JavaScript Arrays

## Array Declaration
```javascript
let heroes = ["Iron Man", "Thor", "Captain America", "Hulk"];
let marks = [87, 96, 45, 23, 100];
let com = ["Iron Man", 87];
```

## Array Properties and Methods

### Array Length
```javascript
heroes.length; // Returns the length of the array
```

### Array Indices
Access array elements using indices:
```javascript
heroes[0], heroes[1], ...;
```

### Mutability
Arrays are mutable, allowing for changes to values at any index. Strings, however, are immutable and cannot be changed after creation.

### Type of Array
```javascript
typeof(heroes); // Returns 'object'
```
Arrays are a type of object:
```javascript
// Object structure: {key1: value1, key2: value2, ...}
// Array structure: {index0: value0, index1: value1, ...}
```

## Looping Through Arrays
Arrays can be looped through using various methods:
- `for` loop
- `while` loop
- `for-of` loop

## Array Methods
- `.push(item1, item2, ...)`: Adds item(s) to the end of the array.
- `.pop()`: Removes the last item from the array and returns it.
- `.toString()`: Converts the array to a string.
- `.concat(array2)`: Joins multiple arrays and returns the result. Does not change the original array.
- `.unshift(item1, item2, ...)`: Adds item(s) to the start of the array.
- `.shift()`: Removes the first item from the array and returns it.
- `.slice(i, j)`: Returns a portion of the array from index `i` to `j` (not inclusive). Does not change the original array.
- `.splice(startIdx, delCount, newEl1)`: Changes the original array by adding, removing, or replacing elements.
