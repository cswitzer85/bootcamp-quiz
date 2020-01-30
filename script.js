//---------------_______________---------------Variables---------------_______________---------------
var highScoreInitials = [];
var userInitials;
var questionsArray = ["What letter does array stary with?", "What letter does boolean start with?", "What letter does concatinate start with?", "What letter does div start with?", "What letter does append start with?", "What letter does body start with?", "What letter does class start with?", "What letter does doctype start with?"];
var answerOptionsArray = [arrayOfQuestionsForQuestionI0, arrayOfQuestionsForQuestionI1, arrayOfQuestionsForQuestionI3, arrayOfQuestionsForQuestionI4, arrayOfQuestionsForQuestionI5, arrayOfQuestionsForQuestionI6, arrayOfQuestionsForQuestionI7]
var arrayOfQuestionsForQuestionI0 = ["This answer is answer A", "This answer is answer B", "This answer is answer C", "This answer is answer D"];
var arrayOfQuestionsForQuestionI1 = ["This answer is answer A", "This answer is answer B", "This answer is answer C", "This answer is answer D"];
var arrayOfQuestionsForQuestionI2 = ["This answer is answer A", "This answer is answer B", "This answer is answer C", "This answer is answer D"];
var arrayOfQuestionsForQuestionI3 = ["This answer is answer A", "This answer is answer B", "This answer is answer C", "This answer is answer D"];
var arrayOfQuestionsForQuestionI4 = ["This answer is answer A", "This answer is answer B", "This answer is answer C", "This answer is answer D"];
var arrayOfQuestionsForQuestionI5 = ["This answer is answer A", "This answer is answer B", "This answer is answer C", "This answer is answer D"];
var arrayOfQuestionsForQuestionI6 = ["This answer is answer A", "This answer is answer B", "This answer is answer C", "This answer is answer D"];
var arrayOfQuestionsForQuestionI7 = ["This answer is answer A", "This answer is answer B", "This answer is answer C", "This answer is answer D"];
var secondsRemaining = 60;
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
var currentScore;
var selectedButton;

function checkAnswer() {
    var correctAnswer = 0
    if (selectedButton == correctAnswer) {
        currentScore++;
        console.log("correct")
    } else {
        secondsRemaining = secondsRemaining-10;
        console.log("wrong")
    }}


    //---------------_______________---------------Functions---------------_______________---------------
    //when play button pressed ->


    function startGame() {
        //timer will start counting down from 60 seconds 
        secondsRemaining = 60;
        getFirstQuestion();

        var timerInterval = setInterval(function () {
            secondsRemaining--;
            // timer will run until it reaches 0 seconds
            if (secondsRemaining >= 0) {
                console.log(secondsRemaining);
                $("#timer").text(secondsRemaining);
                $("#gameTimer").attr("value", secondsRemaining);
            }
            //once time reaches 0 a prompt will ask user for their initials
            else if (secondsRemaining === -1) {
                userInitials = prompt("Please enter your initials for your high score!")
                highScoreInitials = highScoreInitials.concat(userInitials + " - - - - - - - " + "Score: " + "9001");
                $(".highScore").text(highScoreInitials)
            } else {}
        }, 1000);


        // Question display
        // ---------------_______________---------------Questions---------------_______________---------------

        // first question will appear
        function getFirstQuestion() {
            // var randomQuestion = questionsArray[Math.floor(Math.random()*questionsArray.length)];
            $("#questionDisplay").text(questionsArray[0]);
            $("#buttonA").text(arrayOfQuestionsForQuestionI0[0]);
            $("#buttonB").text(arrayOfQuestionsForQuestionI0[1]);
            $("#buttonC").text(arrayOfQuestionsForQuestionI0[2]);
            $("#buttonD").text(arrayOfQuestionsForQuestionI0[3]);
        }
    


    // whenever an answer is chosen ->
    // if correct change score by +1
    // if incorrect change time by -10 seconds
    // next question appears

} //---------------End of startGame function---------------