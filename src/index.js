import drawParts from "./drawParts.js";
import letterKeyCodes from './keycodes.js';
import "./index.css";

let wrongGuessCount = 1;
let guesses = {};

function startGame(){
  drawParts.gameArea.start();
  addGuess();
  drawParts.frame();

  if(wrongGuessCount > 0) { drawParts.head() };
  if(wrongGuessCount > 1) { drawParts.body() };
  if(wrongGuessCount > 2) { drawParts.rightArm() };
  if(wrongGuessCount > 3) { drawParts.leftArm() };
  if(wrongGuessCount > 4) { drawParts.leftLeg() };
  if(wrongGuessCount > 5) { drawParts.rightLeg() };
  if(wrongGuessCount > 5) { drawParts.gameOver() };

  console.log(letterKeyCodes[66])
}


function addGuess(){
  window.addEventListener('keydown', function (e){
    if(!guesses[e.keyCode]) { guesses[e.keyCode] = true }
    else{
      console.log('already tried that letter')
    }
    console.log(guesses)
    
  })
}

startGame();