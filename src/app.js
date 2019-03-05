const drawParts = require("./drawParts.js");
const addGuess = require("./addGuess");
const fetchWord = require("./fetchWord")
const letterKeyCodes = require('./keycodes.js');
import "./index.css";

let wrongGuessCount = 0;
let guesses = {};
let word = fetchWord();
let correctGuessesArray = Array(word.length).fill('');;
let alreadyGuessed = false;


function startGame(){
  drawParts.gameArea.start();
  drawParts.frame(); //call this before addGuess so that 'word' is drawn on top of frame
  addGuess(guesses, word, wrongGuessCount, alreadyGuessed, correctGuessesArray);
}

startGame();