//---------------_______________---------------Variables---------------_______________---------------



//---------------_______________---------------Functions---------------_______________---------------
function startGame() {
    var secondsRemaining = 6;

    var timerInterval = setInterval(function () {
        secondsRemaining--;
        // timerEl.textContent = secondsRemaining;

        if (secondsRemaining >= 0) {
            //   clearInterval(timerInterval);
            //   sendMessage();
            console.log(secondsRemaining);

        }
    }, 1000);

}


//---------------_______________---------------Questions---------------_______________---------------
// "Select answer A"
// "Select answer B"
// "Select answer C"
// "Select answer D"

//when play button pressed ->
//timer will start counting down from 60 seconds
//first question will appear
//whenever an answer is chosen ->
//if correct change score by +1
//if incorrect change time by -10 seconds
//next question appears
//when time is up ->
//prompt input for high score
//when input for high score is submitted ->
//update high score display





