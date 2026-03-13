function calculateResult(){

let n = document.getElementById("subjects").value;

let total = 0;

for(let i=1;i<=n;i++){

let marks = parseFloat(prompt("Enter marks for Subject " + i));

total = total + marks;

}

let average = total / n;

let grade;

if(average >= 90){
grade = "A+";
}
else if(average >= 75){
grade = "A";
}
else if(average >= 60){
grade = "B";
}
else if(average >= 50){
grade = "C";
}
else{
grade = "Fail";
}

let result =
"Total Marks: " + total + "<br>" +
"Average: " + average.toFixed(2) + "<br>" +
"Grade: " + grade;

document.getElementById("result").innerHTML = result;

}