const drawParts = require("./drawParts.js");
const addGuess = require("./addGuess");
const letterKeyCodes = require('./keycodes.js');
import "./index.css";

let wrongGuessCount = 0;
let guesses = {};
let correctGuessesArray = [];
let word = ['p', 'o', 'r', 't', 'l', 'a', 'n', 'd'];
let alreadyGuessed = false;


function startGame(){
  drawParts.gameArea.start();
  drawParts.frame(); //call this before addGuess so that 'word' is drawn on top of frame
  addGuess(guesses, word, wrongGuessCount, alreadyGuessed, correctGuessesArray);
}

startGame();