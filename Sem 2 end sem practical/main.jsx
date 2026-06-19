function calculateResult() {

    let input = document.getElementById("marks").value;

    let marksArray = input.split(",");

    let total = 0;

    // Loop to calculate total marks
    for (let i = 0; i < marksArray.length; i++) {
        total += Number(marksArray[i]);
    }

    let average = total / marksArray.length;

    let grade;

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    let result = average >= 40 ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + result;
}