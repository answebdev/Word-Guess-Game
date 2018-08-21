var lettersInRandomWord = [];
var numberBlanks = 0;
var wins = 0;
var losses = 0;
var userGuess = [];
var randomWord;
// var res = str.toUpperCase();

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var wordBlanks = document.getElementById("word-blanks");
var wrongGuesses = document.getElementById("wrong-guesses");
var guessesLeft = document.getElementById("guesses-left");
var winCounter = document.getElementById("win-counter");
var lossCounter = document.getElementById("loss-counter");

function startGame() {
}
// Pick a random word from the wordList array
var wordList = ["ID", "bootcamp", "student", "teacher", "developer", "terminal", "mouse"];
randomWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(randomWord);
// capRandomWord = randomWord.toUpperCase();
// console.log(capRandomWord);
var rightLetter = [];
var wrongLetter = [];
var spaces = [];
var guessesLeft = 9 - wrongLetter;

// Split the randomly selected word into individual letters
lettersInRandomWord = randomWord.split("");
// Determine the number of blank spaces in the randomly selected word
numberBlanks = lettersInRandomWord.length;
console.log(numberBlanks);
// Create spaces based on number of letters in word
function createSpaces() {
  for (i = 0; i < randomWord.length; i++) {
    spaces.push("_");
    // Show the correct number of spaces on the screen for the random word
    document.getElementById("word-blanks").innerHTML = spaces.join(' ');
  }
  return spaces;
}
console.log(createSpaces());

document.onkeyup = function (event) {
  console.log(event);
  // Determine which key was pressed.
  var userGuess = event.key;

  // Hide the directions
  directionsText.textContent = "";

  // Get the user's guess
  document.onkeyup = function (event) {
    userGuess = event.key;
    // Check the guess
    if (randomWord.indexOf(userGuess) > -1) {
      for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === userGuess) {
          spaces[i] = userGuess;
          console.log(spaces);
          // rightLetter.push(userGuess);
          console.log(rightLetter);

          // Populate the game (spaces) with the correctly guessed letter
          // document.getElementById("word-blanks").innerHTML = rightLetter;
        }
      }
      // console.log(randomWord.indexOf(userGuess));
      // console.log("Correct");
    } else {
      // Push wrong guess into wrongLetter array
      wrongLetter.push(userGuess);
      // Show which letters were guessed incorrectly on the screen
      document.getElementById("wrong-guesses").innerHTML = wrongLetter.join(", ");
      // Decrease the number of guesses left
      guessesLeft--;
      // Update number of guesses left on the screen
      document.getElementById("guesses-left").innerHTML = guessesLeft;
      console.log(guessesLeft);
      console.log(wrongLetter);
      // When user has guessed all the letters (guessed the word) display a win message
      // Update the number of wins - plus one
      // Restart the game

      // When user has exhaused all 9 guesses display a lose message
      // Update the number of losses - plus one
      // Restart the game
    }
  }



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