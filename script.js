//---------------_______________---------------Variables---------------_______________---------------
var secondsRemaining = 3;
var highScores = [];
var userInitials;

//---------------_______________---------------Functions---------------_______________---------------
//when play button pressed ->
function startGame() {
    //timer will start counting down from 60 seconds
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
            highScores = highScores.concat(userInitials);
        }
    }, 1000);
} //---------------End of start function---------------

// Question display

//---------------_______________---------------Questions---------------_______________---------------
// "Select answer A"
// "Select answer B"
// "Select answer C"
// "Select answer D"

//first question will appear
//whenever an answer is chosen ->
//if correct change score by +1
//if incorrect change time by -10 seconds
//next question appears
//when time is up ->
//prompt input for high score
//when input for high score is submitted ->
//update high score display