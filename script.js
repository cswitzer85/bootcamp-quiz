//---------------_______________---------------Variables---------------_______________---------------
// var highScoreInitialsArray = [];
// var userInitials;
// ---------------_______________Questions & Answers_______________---------------
var questionsArray = ["What is commonly referred to as the bones of a web page?", "What are the values of a boolean?", "What does concatinate do?", "How do you apply a CSS style document to your HTML document?", "How do you send data to the console", "How can you see what is happening on a web page?", "What are the following; div, p, img, main, footer?", "What section of the HTML document do you reference your css in?"];
var arrayForButton0 = ["HTML", "Yes/No", "Knocks stuff off the counter", "Combine", "console.log", "Open your eyes", "Articles", "Script"];
var arrayForButton1 = ["XYZ", "True/False", "Randomly rearranges an array", "Array", "appendToConsole", "Inspect", "Artifacts", "Footer"];
var arrayForButton2 = ["Potato", "Cat/Dog", "Combines two pieces together", "Span", "data.console", "Close your eyes", "Elements", "Body"];
var arrayForButton3 = ["CSS", "Zero/One", "Sings the song of their people", "Link", "sendToConsole", "ViewHTML", "Models", "Head"];
var secondsRemaining = 30;
var correctAnswerIndex = 0
var selectedButton = null
var currentScore = 0
var index = 0
// FOR RANDOM INDEX -->Math.floor(Math.random() * questionsArray.length);

function buttonA_Selected() {
    selectedButton = 0
    console.log("button A pressed");
    checkAnswer();
};

function buttonB_Selected() {
    selectedButton = 1
    console.log("button B pressed");
    checkAnswer();
};

function buttonC_Selected() {
    selectedButton = 2
    console.log("button C pressed")
    checkAnswer();
};

function buttonD_Selected() {
    selectedButton = 3
    console.log("button D pressed")
    checkAnswer();
};

function getFirstQuestion() {
    
    $("#questionDisplay").text(questionsArray[0]);
    $("#buttonA").text(arrayForButton0[0]);
    $("#buttonB").text(arrayForButton1[0]);
    $("#buttonC").text(arrayForButton2[0]);
    $("#buttonD").text(arrayForButton3[0]);
}

//---------------_______________---------------Functions---------------_______________---------------

function checkAnswer() {
    if (selectedButton == correctAnswerIndex) {
        currentScore++;
        console.log("correct")
        correctAnswerIndex = correctAnswerIndex + 1;
        index = index + 1;
        $("#questionDisplay").text(questionsArray[index]);
        $("#buttonA").text(arrayForButton0[index]);
        $("#buttonB").text(arrayForButton1[index]);
        $("#buttonC").text(arrayForButton2[index]);
        $("#buttonD").text(arrayForButton3[index]);
        if (correctAnswerIndex == 4) {
            correctAnswerIndex = 0;
        }

    } else {
        console.log("wrong")
        var correctAnswer = correctAnswer++;
        secondsRemaining = secondsRemaining - 5;
        $("#questionDisplay").text(questionsArray[index]);
        $("#buttonA").text(arrayForButton0[index]);
        $("#buttonB").text(arrayForButton1[index]);
        $("#buttonC").text(arrayForButton2[index]);
        $("#buttonD").text(arrayForButton3[index]);
        if (correctAnswerIndex == 4) {
            correctAnswerIndex = 0
        }

    }
}


//when play button pressed ->


function startGame() {
    //timer will start counting down from 60 seconds 
    secondsRemaining = 30;
    currentScore = 0;
    getFirstQuestion();
    // $(".highScore").text(highScoreInitialArray)

    var timerInterval = setInterval(function () {
        secondsRemaining--;
        //once time reaches 0 a prompt will ask user for their initials
        if (secondsRemaining <= 0) {
            $("#timer").text(0);
            $("#gameTimer").attr("value", 0);
            secondsRemaining = 0;
            console.log(secondsRemaining);
            timerInterval = clearInterval;
            secondsRemaining = -1;

        }

        // timer will run until it reaches 0 seconds
        else {
            console.log(secondsRemaining);
            $("#timer").text(secondsRemaining);
            $("#gameTimer").attr("value", secondsRemaining);
        }
    }, 1000);


    // HighScore
    // userInitials = prompt("Please enter your initials for your high score!")

} //---------------End of startGame function---------------