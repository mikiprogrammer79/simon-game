//Game pattern
var gamePattern = [];
//create a new array called buttonColours and set it to hold the sequence of colours.
var buttonColours = ["red", "blue", "green", "yellow"];

//Create a userClicked pattern
var userClickedPattern = [];

var level = 0;
var started = false;

//Create a function that generate a random number
function nextSequence() {
    userClickedPattern = [];
    r = Math.floor(Math.random() * 4);
    //Create a random Chosen colour and add it to the gamePattern array
    var randomChosenColour = buttonColours[r];
    gamePattern.push(randomChosenColour);
    //Show the Sequence to the User with Animations and Sounds
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level " + level);
    
}

//Create a function to play sounds
function playSound(colour) {
    var audio = new Audio("sounds/" + colour + ".mp3");
    audio.play();
}

//Create a function to animate button clicked
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed")
    }, 100);
}
//Create a function to start over the game
function startOver() {
    level = 0;
    started = false;
    gamePattern = []
}


//Create the game

$(document).keypress(function() {
    if (!started) {
        nextSequence();
        started = true;
    }    
})
//Check which button is pressed
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    //Add sounds to button click
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
})

//Check Answers
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("right");
        if (userClickedPattern.length === gamePattern.length){
            //Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    }else {
        console.log("wrong");
        playSound("wrong");
        $("h1").text("Game Over! Press A key to restart the game");
        $('body').addClass("game-over");
        setTimeout(function() {
            $('body').removeClass("game-over")
        }, 200);
        startOver();
        
    }
}



