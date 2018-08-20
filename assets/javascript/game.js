var lettersInRandomWord = [];
var numberBlanks = 0;
var wins = 0;
var losses = 0;
var userGuess = [];
var numGuessesLeft = 9;
var randomWord;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var wordBlanks = document.getElementById("word-blanks");
var wrongGuesses = document.getElementById("wrong-guesses");
var guessesLeft = document.getElementById("guesses-left");
var winCounter = document.getElementById("win-counter");
var lossCounter = document.getElementById("loss-counter");

function startGame() {
}
//Pick a random word from the wordList array
var wordList = ["laptop", "bootcamp", "student", "teacher", "developer", "terminal", "mouse"];
randomWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(randomWord);
var rightLetter = [];
var wrongLetter = [];
var spaces = [];

//Splits the randomly selected word into individual letters
lettersInRandomWord = randomWord.split("");
//Determines the number of blank spaces in the randomly selected word
numberBlanks = lettersInRandomWord.length;
console.log(numberBlanks);
//Creates spaces based on number of letters in word
function createSpaces() {
  for (i = 0; i < randomWord.length; i++) {
    spaces.push("_");
    document.getElementById("word-blanks").innerHTML = spaces;
  }
  return spaces;
}
console.log(createSpaces());

document.onkeyup = function (event) {
  console.log(event);
  // Determines which key was pressed.
  var userGuess = event.key;

  // Hide the directions
  directionsText.textContent = "";

  //GET A GUESS FROM THE USER
  // document.addEventListener("keypress", (event)) {
  //   userGuess = String.fromCharCode(event.keyCode);
  //   if (randomWord.indexOf(userGuess) > -1 {
  //     console.log(true);
  //   }
  //   console.log(event);
  // });
  document.onkeyup = function(event) {
    userGuess = event.key;
    //Checking the guess
    if(randomWord.indexOf(userGuess) > -1) {
      console.log(randomWord.indexOf(userGuess));
      console.log("Correct");
    } else {
      wrongLetter.push(userGuess);
      console.log(wrongLetter);
    }
  }

  // document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
  document.getElementById("guesses-left").innerHTML = numGuessesLeft;
  document.getElementById("wrong-guesses").innerHTML = wrongLetter;
  document.getElementById("win-counter").innerHTML = wins;
  document.getElementById("loss-counter").innerHTML = losses;





  // Display the user and computer guesses, and wins/losses/ties.
  // userChoiceText.textContent = "You chose: " + userGuess;
  // computerChoiceText.textContent = "The computer chose: " + computerGuess;
  // winsText.textContent = "wins: " + wins;
  // lossesText.textContent = "losses: " + losses;
  // tiesText.textContent = "ties: " + ties;
}




//1. Press any key to start -- DONE
//2. Pick a random word -- DONE

//3. Display the game in the browser -- DONE(?)

//4. Get a guess from the user
//5. Check the guess
    //If guess is correct, update the spaces with the letter(s)
    //If guess is wrong (else), update the number wrong
//6. Loop steps 3-5 until (while loop?)game is over
    //while(!done()) {
    //     displayGame();
    //     letterGuess=getGuess();
    //     if(guessCorrect()) {
    //         updateSpaces();
    //     } else {
    //         numberWrong++;
    //     }
    //  ask to play again
    // }


    //Create an array of words -- DONE
    //Pick a random word -- DONE
    //Create spaces based on length of word -- DONE
    //Get a guess from the user
    //Check the guess
    //If correct, push to right array
    //If wrong, push to wrong array