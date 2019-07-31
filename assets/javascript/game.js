//game begins
var gameStarted = false;

//game ends
var gameOver = false;

var wins = 0;   

var losses = 0;

//numbers as they are added by the player
var totalNumbers = 0;

//numbers player will guess with icons
var guessNumbers = [];          
var rand = 0;


//function to create a random number the user needs to guess between 120 and 19
$(document).ready(function(){
    iconNumbers();
    
 

//develop a for-loop to create random numbers for each icon (4)
function iconNumbers (){

    rand = Math.floor(Math.random()* 120)+ 19;
    //var rand = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    $('#random-number').text(rand);
    console.log(rand);
    for (var i = 0; i < 4; i++){
        var newNumber = Math.floor(Math.random() * 12) + 1;
        console.log(newNumber);
        guessNumbers.push(newNumber);
    }
    gameStarted = true;
    $('#total-score').text(totalNumbers);
};


//Resets the game if the player should win
function resetGameWin() {
    gameStarted = false;
    wins++;
    guessNumbers = [];
    totalNumbers = 0;
    $('#wins').text(wins);
    // iconNumbers();
}
//And this resets if the game should be lost
function resetGameLost() {
    gameStarted = false;
    losses++;
    guessNumbers = [];
    totalNumbers = 0;
    $('#losses').text(losses);
    // iconNumbers();
};


//Icon clicks generate a random number from the loop above

function calculateScore(numberValue){
    if (gameStarted == false){
        console.log("gameNotStarted");
        iconNumbers();
    } else {
        totalNumbers = totalNumbers + numberValue;
    console.log("total=" + totalNumbers);
    $('#total-score').text(totalNumbers);
    validateCheck();
    }

}

$('#img1').on ('click', function(){
   calculateScore(guessNumbers[0]);
})

$('#img2').on ('click', function(){
    calculateScore(guessNumbers[1]);
})

$('#img3').on ('click', function(){
    calculateScore(guessNumbers[2]);
})

$('#img4').on ('click', function(){ 
    calculateScore(guessNumbers[3]);	
})

//Validate that the player has won/lost, alert them, and restart the game (still working on reset)
function validateCheck() {
    //players number must equal random number
    if (totalNumbers == rand){
        $("#total-score").append(" You win!");
        //add wins score
        
        resetGameWin();
        

    } else {
        if (totalNumbers > rand){
        $("#total-score").append(" You lose!");
        
        resetGameLost();
        
        }
    }       
    
};


//Update Display
$('#wins').text(wins);
$('#losses').text(losses);

});
