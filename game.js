//Game pattern
var gamePattern = [];
//create a new array called buttonColours and set it to hold the sequence of colours.
var buttonColours = ["red", "blue", "green", "yellow"];

//Create a userClicked pattern
var userClickedPattern = [];

//Create a function that generate a random number
function nextSequence() {
    r = Math.floor(Math.random() * 4);
    return r;
}

//Create a random Chosen colour and add it to the gamePattern array
var randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

//Show the Sequence to the User with Animations and Sounds
$("#" + randomChosenColour).fadeOut(100).fadeIn(100);
var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
audio.play();

//Check which button is pressed
$(".btn").click(function() {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
})
