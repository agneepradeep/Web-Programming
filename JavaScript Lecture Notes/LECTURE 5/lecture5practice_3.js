//We are given array of marks of students. Filter out of the marks of students that scored 90+
let num = [87,90,34,78,91,99,93,55,67,88,92,84]
let ninty_plus = num.filter((val) =>{
    if (val >= 90){
        return val;
    }
})