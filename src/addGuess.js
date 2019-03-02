let guesses = {};

function addGuess(){
    window.addEventListener('keydown', function (e){
      if(!guesses[e.keyCode]) { guesses[e.keyCode] = true }
      else{
        console.log('already tried that letter')
      }
      console.log(guesses)
      
    })
  }

  module.exports = addGuess;