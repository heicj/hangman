const drawParts = require("./drawParts.js");
const addGuess = require("./addGuess");
const letterKeyCodes = require('./keycodes.js');
import "./index.css";

let wrongGuessCount = 1;

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
  
}

startGame();