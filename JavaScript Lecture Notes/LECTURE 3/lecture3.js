/**Loops in Javascript
 * for loop
 * infinite loop
 * while loop
 * do-while loop
 * for-of loop
 * for-in loop
 * 
 * for(let i = 1; i<= 5;i++){
 *     console.log("Agneepradeep Verma");
 * }
 * console.log(i) --> error since i is in block scope
 * 
 * for(var i = 1; i<= 5;i++){
 *     console.log("Agneepradeep Verma");
 * }
 * console.log(i) --> 6 (global scope)
 * 
 * Infinite Loop {Not recommended}
 * for(let i = 1; i>= 0;i++){
 *      statement;
 * }
 * 
 * while(){Statements;}
 * 
 * do{statements} while(condition);
 * 
 * for-of loop used for parsing data in strings & arrays
 * for(let val of strVar){
 *      conditions;
 * }
 * let a = "Agneepradeep Verma"
 * for(let i of a){
 *     console.log(i);
 * }
 * 
 * for in loop used to parse data in objects
 * for(let val in objVar){
 *      statements;
 * }
*/

/*let student = {
    name : "Agneepradeep",
    age : 20,
    cgpa : 7.6
}

for(i in student){
    console.log(i," : ",student[i]);
}
*/

/**Strings in Javascript
 * let s = "Agneepradeep"; --> correct {double quotes}
 * let b = 'Agneepradeep'; --> correct {single quotes}
 * let a = `Agneepradeep`; --> correct {back tics}
 * s.length --> 12
 * s[0],s[1],s[2] --> index addressing to get the character of string
*/

/*Template literals in Javascript --> `string text ${expression} string text`
let obj = {
    name: "Agneepradeep Verma",
    age: 22
}

let output = "My Name is ${obj.name} and my age is ${obj.age}";
console.log(output); --> correct
*/

/*Escape characters - counts only as a single character duing string length functions
\n - newline
\t - tab
*/

/*String built-in methods in JS
str.toUpperCase() --> creates a new string with new value
str.toLowerCase()
str.trim() --> remove whitespaces of endings
str.slice(start,end) --> substring --> [Start,end)
str1.concat(str2) --> str1 += str2
str.replace(searchVal, newVal) --> may be character / String --> replace only single time for first match
str.charAt(index)

Strings are immutable, not changable but possible if we use replace() to change the string
*/