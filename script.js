//---------------_______________---------------Variables---------------_______________---------------
var highScoreInitials = [];
var userInitials;
var questionsArray = ["Select answer A", "Select answer B", "Select answer C", "Select answer D", "Select answer A", "Select answer B", "Select answer C", "Select answer D"];
var answerOptionsArray = []
var CorrectAnswerIndexArray = [ "Answer A", "Answer B", "Answer C", "Answer D"];

//---------------_______________---------------Functions---------------_______________---------------
//when play button pressed ->
function startGame() {
    //timer will start counting down from 60 seconds 
    var secondsRemaining = 3;
    getRandomQuestion();

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
        }
        else{}
    }, 1000);
    
    // Question display
    // ---------------_______________---------------Questions---------------_______________---------------

    // first question will appear
    function getRandomQuestion() {
        var randomQuestion = questionsArray[Math.floor(Math.random()*questionsArray.length)];
        $("#questionDisplay").text(randomQuestion);
    }
    
    // whenever an answer is chosen ->
    // if correct change score by +1
    // if incorrect change time by -10 seconds
    // next question appears

} //---------------End of startGame function---------------
    

