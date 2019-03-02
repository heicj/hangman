const drawParts = require("./drawParts.js")
//function needs to take word array and wrong guess count
//as parameters also.  -done

//check if guess is in guesses dic. add if not. -done

//check if letter guessed is in word array
//if not increment wrongGuessCount -done
//if is figure out how to handle it so can use info to display
//correct guesses

//end of function need to call a redraw function to draw
//image based on wrong guesses count.

function addGuess(guesses, word, wrongGuessCount, alreadyGuessed){
    window.addEventListener('keydown', function (e){
      let letter = e.key;

      if(!guesses[letter]) { 
        guesses[letter] = true 
        alreadyGuessed = false
        console.log(alreadyGuessed)
      }
      else{
        alreadyGuessed = true
        console.log(alreadyGuessed)
        return;
      }
      if(!word.includes(letter)){
        wrongGuessCount +=1
        console.log(wrongGuessCount)
      }
      drawParts.drawWrongGuesses(wrongGuessCount)
    })


  }

  module.exports = addGuess;