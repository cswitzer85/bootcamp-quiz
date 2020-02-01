//---------------_______________---------------Variables---------------_______________---------------
var userInitials;
// ---------------_______________Questions & Answers_______________---------------
var questionsArray = ["What is commonly referred to as the bones of a web page?", "What are the values of a boolean?", "What does concatinate do?", "How do you apply a CSS style document to your HTML document?", "How do you send data to the console", "How can you see what is happening on a web page?", "What are the following; div, p, img, main, footer?", "What section of the HTML document do you reference your css in?"];
var arrayForButton0 = ["HTML", "Yes/No", "Knocks stuff off the counter", "Combine", "console.log", "Open your eyes", "Articles", "Script"];
var arrayForButton1 = ["XYZ", "True/False", "Randomly rearranges an array", "Array", "appendToConsole", "Inspect", "Artifacts", "Footer"];
var arrayForButton2 = ["Potato", "Cat/Dog", "Combines two pieces together", "Span", "data.console", "Close your eyes", "Elements", "Body"];
var arrayForButton3 = ["CSS", "Zero/One", "Sings the song of their people", "Link", "sendToConsole", "ViewHTML", "Models", "Head"];
var secondsRemaining = 30;
var correctAnswerIndex = 0
var selectedButton;
var currentScore;
var index = 0
var highScore;
var displayScore;
var playerNameStored = Object.keys(localStorage);
var playerScoreStored = Object.values(localStorage);
    
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

function stopGame() {
    $("#timer").text(0);
    $("#gameTimer").attr("value", 0);
    secondsRemaining = null;
    correctAnswerIndex = 0
    selectedButton = null
    index = 0
}

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
            if (index == 8) {
                stopGame();
            }
        }

    } else {
        console.log("wrong")
        correctAnswerIndex = correctAnswerIndex + 1;
        index = index + 1;
        secondsRemaining = secondsRemaining - 5;
        $("#questionDisplay").text(questionsArray[index]);
        $("#buttonA").text(arrayForButton0[index]);
        $("#buttonB").text(arrayForButton1[index]);
        $("#buttonC").text(arrayForButton2[index]);
        $("#buttonD").text(arrayForButton3[index]);
        if (correctAnswerIndex == 4) {
            correctAnswerIndex = 0
            if (index == 8) {
                stopGame();
            }
        }

    }
}
function getScores() {
    userInitials = prompt("Please enter your initials for your high score!")
    localStorage.setItem(userInitials, currentScore);
    
// for (var playerName in localStorage) {
//     console.log(playerName);
playerNameArray = Object.keys(localStorage);
playerScoreArray = Object.values(localStorage);
// for (i = 0;i < localStorage.length; i++)
$(".scoreBoard").text("Player " + (playerNameStored) + " . . . . . " + "Score " + (playerScoreStored));
console.log(playerNameStored);
console.log(playerScoreStored);


}


// document.getElementById("#startButton").addEventListener("click", startGame());
// $("#startButton").click(startGame());
//---------------_______________---------------Functions---------------_______________---------------
function startGame() {
    // questions and timer appear below start button
    $(".hidden").show();
    //timer will start counting down from 30 seconds and continue until time runs out or all questions answered
    secondsRemaining = 30;
    currentScore = 0;
    getFirstQuestion();
    var timerInterval = setInterval(function () {
        secondsRemaining--;
        // timer will run until it reaches 0 seconds or all questions are answered
        if (secondsRemaining > 0) {
            console.log(secondsRemaining);
            $("#timer").text(secondsRemaining);
            $("#gameTimer").attr("value", secondsRemaining);
        }
        //once time reaches 0, the game is over and the stopGame function is run
        else {
            stopGame();
            clearInterval(timerInterval);
            getScores();// problem here    !!!---------------------------------Fix This---------------------------------!!!
            // currentScore = 0
            $(".hidden").hide();
        
        }
    }, 1000);
} //---------------End of startGame function--------------