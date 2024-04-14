//Function and Methods in Javascript
//function functionName(param1,param2..){
//      do Some work
//      return varName;
//}
//Arrow Function - Compact Way of writing a function - Modern Javascript
//const funName = (param1,param2..) => { funName act as a variable
//  do some work
//}

//forEach Loop in Arrays
//arr.forEach(callBackFunction definition(val,idx)) => { Function can be passed in Parameters, and executed on each element
    //do some work
//}

//arr.forEach((val{array item},idx{positon},arr{full array}...) => { //Arrow function Style
    //do some work
//})

//function functionName(val){}
//arr.forEach(functionName);

//Higher Order Functions/Methods --> Use Another Function as Parameter or return Function as Value

//Map
//arr.map(callbackFnx(value,index,array))

//let nums = [67.52,39]
//let new Arr = nums.map((val) =>{
    //return val*2;
//})

//filter
//let newArr = nums.filter((val) =>{
    //return val%2 === 0;
//})

//reduce - performs some operations & reduces the array to a single value. it returns that dsingle value

//const arr1 = [1,2,3,4,5]
//cons sum = arr1.reduce((res,curr) ==>{
    //return res+curr
//})