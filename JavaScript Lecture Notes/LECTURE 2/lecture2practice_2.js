let score = prompt("Enter Your Grade :");
if(score >80 && score <=100){
    alert("Student Got 'A' Grade"); 
} else if(score >70 && score <=79){
    alert("Student Got 'B' Grade");
} else if(score >60 && score <=69){
    alert("Student Got 'C' Grade");
} else if(score >50 && score <=59){
    alert("Student Got 'D' Grade");
} else if(score >0 && score <=49){
    alert("Student Got 'F' Grade");
} else{
    alert("Invalid Score");
}