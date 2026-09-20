// SHOW CALCULATOR PAGE

function showCalculator() {

    document.getElementById("introPage").classList.add("hidden");

    document.getElementById("resultPage").classList.add("hidden");

    document.getElementById("calculatorPage").classList.remove("hidden");
}


// SHOW INTRODUCTION PAGE

function showIntroduction() {

    document.getElementById("calculatorPage").classList.add("hidden");

    document.getElementById("resultPage").classList.add("hidden");

    document.getElementById("introPage").classList.remove("hidden");
}


// CALCULATE RESULT

function calculateResult() {

    let name = document.getElementById("name").value;

    let english = Number(document.getElementById("english").value);
    let telugu = Number(document.getElementById("telugu").value);
    let hindi = Number(document.getElementById("hindi").value);
    let science = Number(document.getElementById("science").value);
    let maths = Number(document.getElementById("maths").value);


    // CHECK NAME

    if (name == "") {

        alert("Please enter student name.");

        return;
    }


    // CHECK MARKS

    if (
        english < 0 || english > 100 ||
        telugu < 0 || telugu > 100 ||
        hindi < 0 || hindi > 100 ||
        science < 0 || science > 100 ||
        maths < 0 || maths > 100
    ) {

        alert("Please enter marks between 0 and 100.");

        return;
    }


    // TOTAL

    let total = english + telugu + hindi + science + maths;


    // AVERAGE

    let average = total / 5;


    // PERCENTAGE

    let percentage = (total / 500) * 100;


    // PASS OR FAIL

    let result;

    if (
        english >= 35 &&
        telugu >= 35 &&
        hindi >= 35 &&
        science >= 35 &&
        maths >= 35
    ) {

        result = "Pass";

    }
    else {

        result = "Fail";
    }


    // GRADE

    let grade;

    if (result == "Fail") {

        grade = "F";

    }
    else if (percentage >= 90) {

        grade = "A+";

    }
    else if (percentage >= 80) {

        grade = "A";

    }
    else if (percentage >= 70) {

        grade = "B+";

    }
    else if (percentage >= 60) {

        grade = "B";

    }
    else if (percentage >= 50) {

        grade = "C";

    }
    else {

        grade = "D";
    }


    // FIND WEAK SUBJECTS

    let weakSubjects = [];


    if (english < 50) {

        weakSubjects.push("English");
    }


    if (telugu < 50) {

        weakSubjects.push("Telugu");
    }


    if (hindi < 50) {

        weakSubjects.push("Hindi");
    }


    if (science < 50) {

        weakSubjects.push("Science");
    }


    if (maths < 50) {

        weakSubjects.push("Maths");
    }


    // IMPROVEMENT ADVICE

    let advice = "";


    if (percentage >= 90) {

        advice =
            "Excellent performance! Keep maintaining your marks. " +
            "Continue regular revision and practice.";

    }
    else if (percentage >= 80) {

        advice =
            "Very good performance! Focus more on your weak subjects " +
            "and practice regularly to reach 90% or above.";

    }
    else if (percentage >= 70) {

        advice =
            "Good performance! Practice more questions and revise " +
            "your lessons regularly.";

    }
    else if (percentage >= 60) {

        advice =
            "You are doing well. Give more time to difficult subjects " +
            "and follow a regular study schedule.";

    }
    else if (percentage >= 50) {

        advice =
            "You need more practice. Create a daily study timetable " +
            "and spend extra time on difficult subjects.";

    }
    else {

        advice =
            "You need to improve your performance. Start with basic " +
            "concepts, study regularly and ask your teachers for help.";
    }


    // WEAK SUBJECT MESSAGE

    let weakMessage;


    if (weakSubjects.length == 0) {

        weakMessage =
            "Excellent! No subject needs special attention.";

    }
    else {

        weakMessage =
            weakSubjects.join(", ") +
            " need more attention and practice.";
    }


    // RESULT COLOR

    let resultClass;

    if (result == "Pass") {

        resultClass = "good";

    }
    else {

        resultClass = "fail";
    }


    // DISPLAY RESULT

    document.getElementById("result").innerHTML =

        "<h2>Result Summary</h2>" +

        "<p><b>Student Name:</b> " + name + "</p>" +

        "<p><b>English:</b> " + english + "</p>" +

        "<p><b>Telugu:</b> " + telugu + "</p>" +

        "<p><b>Hindi:</b> " + hindi + "</p>" +

        "<p><b>Science:</b> " + science + "</p>" +

        "<p><b>Maths:</b> " + maths + "</p>" +

        "<hr>" +

        "<p><b>Total Marks:</b> " + total + " / 500</p>" +

        "<p><b>Average:</b> " + average.toFixed(2) + "</p>" +

        "<p><b>Percentage:</b> " + percentage.toFixed(2) + "%</p>" +

        "<p><b>Grade:</b> " + grade + "</p>" +

        "<p><b>Result:</b> " +
        "<span class='" + resultClass + "'>" +
        result +
        "</span></p>" +

        "<div class='improvement'>" +

        "<h3>📚 How to Improve Your Marks</h3>" +

        "<p>" + advice + "</p>" +

        "<p><b>Subjects Needing Attention:</b><br>" +
        weakMessage +
        "</p>" +

        "</div>";


    // SHOW RESULT PAGE

    document.getElementById("calculatorPage").classList.add("hidden");

    document.getElementById("resultPage").classList.remove("hidden");
}