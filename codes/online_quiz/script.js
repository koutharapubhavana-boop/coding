// QUESTIONS

let questions = [

    {
        question: "What is the capital of India?",

        options: [
            "Mumbai",
            "Delhi",
            "Chennai",
            "Kolkata"
        ],

        answer: 1
    },


    {
        question: "Which language is used to create web pages?",

        options: [
            "Python",
            "Java",
            "HTML",
            "C++"
        ],

        answer: 2
    },


    {
        question: "Which symbol is used for comments in JavaScript?",

        options: [
            "//",
            "##",
            "<!--",
            "**"
        ],

        answer: 0
    },


    {
        question: "Which keyword is used to declare a variable in JavaScript?",

        options: [
            "var",
            "int",
            "string",
            "define"
        ],

        answer: 0
    },


    {
        question: "What does CSS stand for?",

        options: [
            "Computer Style Sheet",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheet"
        ],

        answer: 1
    }

];


// VARIABLES

let currentQuestion = 0;

let timeLeft = 60;

let timer;


// STORE USER ANSWERS

let userAnswers = [];


// START QUIZ

function startQuiz() {

    currentQuestion = 0;

    timeLeft = 60;

    userAnswers = [];

    for (let i = 0; i < questions.length; i++) {

        userAnswers.push(null);

    }


    document.getElementById("introPage")
        .classList.add("hidden");

    document.getElementById("resultPage")
        .classList.add("hidden");

    document.getElementById("quizPage")
        .classList.remove("hidden");


    document.getElementById("time").innerHTML =
        timeLeft;


    showQuestion();

    startTimer();
}


// SHOW QUESTION

function showQuestion() {

    let q = questions[currentQuestion];


    document.getElementById("question").innerHTML =

        (currentQuestion + 1) +
        ". " +
        q.question;


    document.getElementById("option1").innerHTML =
        q.options[0];

    document.getElementById("option2").innerHTML =
        q.options[1];

    document.getElementById("option3").innerHTML =
        q.options[2];

    document.getElementById("option4").innerHTML =
        q.options[3];


    document.getElementById("questionNumber").innerHTML =

        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;


    // REMOVE OLD SELECTED CLASS

    document.getElementById("option1")
        .classList.remove("selected");

    document.getElementById("option2")
        .classList.remove("selected");

    document.getElementById("option3")
        .classList.remove("selected");

    document.getElementById("option4")
        .classList.remove("selected");


    // SHOW PREVIOUS ANSWER

    let selected = userAnswers[currentQuestion];


    if (selected != null) {

        document.getElementById(
            "option" + (selected + 1)
        ).classList.add("selected");

    }


    // PREVIOUS BUTTON

    if (currentQuestion == 0) {

        document.getElementById("previousButton")
            .disabled = true;

    }
    else {

        document.getElementById("previousButton")
            .disabled = false;

    }


    // NEXT BUTTON

    if (currentQuestion == questions.length - 1) {

        document.getElementById("nextButton")
            .style.display = "none";

    }
    else {

        document.getElementById("nextButton")
            .style.display = "block";

    }


    // SUBMIT BUTTON

    if (currentQuestion == questions.length - 1) {

        document.getElementById("submitButton")
            .style.display = "block";

    }
    else {

        document.getElementById("submitButton")
            .style.display = "none";

    }

}


// SELECT ANSWER

function selectAnswer(selectedAnswer) {

    userAnswers[currentQuestion] =
        selectedAnswer;


    // REMOVE SELECTED FROM ALL OPTIONS

    document.getElementById("option1")
        .classList.remove("selected");

    document.getElementById("option2")
        .classList.remove("selected");

    document.getElementById("option3")
        .classList.remove("selected");

    document.getElementById("option4")
        .classList.remove("selected");


    // SELECT CURRENT OPTION

    document.getElementById(
        "option" + (selectedAnswer + 1)
    ).classList.add("selected");
}


// NEXT QUESTION

function nextQuestion() {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

    }

}


// PREVIOUS QUESTION

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

}


// TIMER

function startTimer() {

    clearInterval(timer);


    timer = setInterval(function() {

        timeLeft--;


        document.getElementById("time").innerHTML =
            timeLeft;


        if (timeLeft <= 0) {

            clearInterval(timer);

            endQuiz();

        }

    }, 1000);

}


// END QUIZ

function endQuiz() {

    clearInterval(timer);


    // CALCULATE SCORE

    let score = 0;


    for (let i = 0; i < questions.length; i++) {

        if (userAnswers[i] ==
            questions[i].answer) {

            score++;

        }

    }


    let percentage =
        (score / questions.length) * 100;


    let performance = "";

    let performanceClass = "";

    let tips = "";


    // PERFORMANCE MESSAGE

    if (percentage >= 90) {

        performance =
            "Excellent! Outstanding performance!";

        performanceClass =
            "excellent";

        tips =
            "Keep maintaining your performance. " +
            "Continue regular revision and practice " +
            "more challenging questions.";

    }

    else if (percentage >= 70) {

        performance =
            "Very Good! You are doing well.";

        performanceClass =
            "good";

        tips =
            "You have a good understanding of the topics. " +
            "Review the questions you got wrong and " +
            "practice more to reach 90%+.";

    }

    else if (percentage >= 50) {

        performance =
            "Good effort! There is room for improvement.";

        performanceClass =
            "average";

        tips =
            "Revise the important concepts regularly. " +
            "Practice more quizzes and focus on topics " +
            "where you make mistakes.";

    }

    else {

        performance =
            "Keep practicing! You can improve your score.";

        performanceClass =
            "needsImprovement";

        tips =
            "Start by reviewing the basic concepts. " +
            "Study regularly, practice more questions, " +
            "and review your mistakes after every quiz.";

    }


    // DISPLAY RESULT

    document.getElementById("result").innerHTML =

        "<h2>Your Final Score</h2>" +

        "<h1>" +
        score +
        " / " +
        questions.length +
        "</h1>" +

        "<p><b>Percentage:</b> " +
        percentage +
        "%</p>" +

        "<p class='" +
        performanceClass +
        "'>" +
        performance +
        "</p>" +

        "<div class='tips'>" +

        "<h3>How to Get Better Marks</h3>" +

        "<p>" +
        tips +
        "</p>" +

        "<h3>Study Tips</h3>" +

        "<ul>" +

        "<li>Revise regularly.</li>" +

        "<li>Practice more questions.</li>" +

        "<li>Read questions carefully.</li>" +

        "<li>Review incorrect answers.</li>" +

        "<li>Focus on weak topics.</li>" +

        "<li>Take another quiz after revision.</li>" +

        "</ul>" +

        "</div>";


    // SHOW RESULT PAGE

    document.getElementById("quizPage")
        .classList.add("hidden");

    document.getElementById("resultPage")
        .classList.remove("hidden");
}


// SHOW INTRODUCTION

function showIntroduction() {

    clearInterval(timer);

    document.getElementById("quizPage")
        .classList.add("hidden");

    document.getElementById("resultPage")
        .classList.add("hidden");

    document.getElementById("introPage")
        .classList.remove("hidden");
}