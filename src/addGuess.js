const drawParts = require("./drawParts.js");
const correctGuessesFunc = require("./correctGuesses");



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
        // console.log(wrongGuessCount)
      }
      else{
        correctGuessesArray = correctGuessesFunc(word, letter, correctGuessesArray)
      }
      // console.log('these are guesses made', guesses)
      // console.log('this is correct guesses', correctGuessesArray)
      drawParts.drawWrongGuesses(wrongGuessCount)
      drawParts.drawWord(correctGuessesArray)
      drawParts.drawAlphabetAndGuesses(guesses)
      
      if(wrongGuessCount > 5){
        setTimeout(function(){drawParts.gameOver(word)}, 1000)
          wrongGuessCount = 0;
      }
    })
    drawParts.drawAlphabetAndGuesses(guesses)
    drawParts.drawWord(correctGuessesArray)


  }

  module.exports = addGuess;