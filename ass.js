let marks = prompt("Enter Percentage: ");
if(marks > 100){
    console.log("Invalid Percentage ");
}
else if(marks < 0){
    console.log("Error ");
}
else if(marks > 80){
    console.log("A1 Grade ");
}
else if(marks >= 69){
    console.log("A Grade ");
}
else if(marks >= 59){
    console.log("B Grade ");
}
else if(marks < 50){
    console.log("F Grade ");
}