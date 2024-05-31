# JavaScript Functions and Methods

## Function Declaration
```javascript
function functionName(param1, param2, ...) {
    // Do some work
    return varName;
}
```

## Arrow Function
Arrow functions provide a compact way to write functions in modern JavaScript.
```javascript
const funName = (param1, param2, ...) => {
    // Do some work
};
```

## forEach Loop in Arrays
The `forEach` loop executes a provided function once for each array element.
```javascript
arr.forEach(callbackFunction(val, idx) => {
    // Do some work
});

// Example with arrow function style
arr.forEach((val, idx, arr) => {
    // Do some work
});

// Using a named function
function functionName(val) {
    // Do some work
}
arr.forEach(functionName);
```

## Higher Order Functions/Methods
Higher-order functions either take another function as a parameter or return a function as a value.

### Map
The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.
```javascript
arr.map(callbackFunction(value, index, array));

let nums = [67, 52, 39];
let newArr = nums.map((val) => {
    return val * 2;
});
```

### Filter
The `filter` method creates a new array with all elements that pass the test implemented by the provided function.
```javascript
let newArr = nums.filter((val) => {
    return val % 2 === 0;
});
```

### Reduce
The `reduce` method executes a reducer function on each element of the array, resulting in a single output value.
```javascript
const arr1 = [1, 2, 3, 4, 5];
const sum = arr1.reduce((res, curr) => {
    return res + curr;
});
```
