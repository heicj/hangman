const drawParts = require("./drawParts.js");
const addGuess = require("./addGuess");
const letterKeyCodes = require('./keycodes.js');
import "./index.css";

let wrongGuessCount = 0;
let guesses = {};
let correctGuessesArray = [];
let word = ['t', 'e', 's', 't'];
let alreadyGuessed = false;


function startGame(){
  drawParts.gameArea.start();
  addGuess(guesses, word, wrongGuessCount, alreadyGuessed, correctGuessesArray);
  drawParts.frame();
}

startGame();