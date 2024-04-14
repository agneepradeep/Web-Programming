//Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string

function countVowels(str){
    str = str.toLowerCase();

    let count = 0;

    for(let i = 0;i<str.length;i++){
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
            count++;
        }
    }
    return count;
}

//Create an arrow function to perform the same task
const countVowels_ = (str) =>{
    str = str.toLowerCase();
    let count = 0;

    for(let i = 0;i<str.length;i++){
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
            count++;
        }
    }
    return count;
}