//For a given array with marks of students -> [85,97,44,37,76,60]. Find the average marks of the entire class

let marks = [85,97,44,37,76,60];
let sum = 0;
for(let i = 0;i<marks.length;i++){
    sum += marks[i];
}
let average = sum/marks.length;
console.log(`average marks of the class : ${average}`)