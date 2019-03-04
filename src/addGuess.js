const drawParts = require("./drawParts.js");
const correctGuessesFunc = require("./correctGuesses");
//function needs to take word array and wrong guess count
//as parameters also.  -done

//check if guess is in guesses dic. add if not. -done

//check if letter guessed is in word array
//if not increment wrongGuessCount -done
//if is figure out how to handle it so can use info to display
//correct guesses
  // can add guess to array in index of where occurs in word array

//end of function need to call a redraw function to draw
//image based on wrong guesses count.

function addGuess(guesses, word, wrongGuessCount, alreadyGuessed, correctGuessesArray){
    window.addEventListener('keydown', function (e){
      let letter = e.key;

      if(!guesses[letter]) { 
        guesses[letter] = true 
        alreadyGuessed = false
      }
      else{
        alreadyGuessed = true
        return;
      }

      if(!word.includes(letter)){
        wrongGuessCount +=1
        console.log(wrongGuessCount)
      }
      else{
        correctGuessesArray = correctGuessesFunc(word, letter, correctGuessesArray)
      }
      console.log(guesses)
      console.log('this is correct guesses', correctGuessesArray)
      drawParts.drawWrongGuesses(wrongGuessCount)
    })


  }

  module.exports = addGuess;