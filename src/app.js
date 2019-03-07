const drawParts = require("./drawParts.js");
const addGuess = require("./addGuess");
const fetchWord = require("./fetchWord")
const randomWords = require("random-words")
const letterKeyCodes = require('./keycodes.js');
import "./index.css";

let wrongGuessCount = 0;
let guesses = {};
let letter = '';

const canvas = document.getElementById('myCanvas')
canvas.style.display = 'none'
const startScreen = document.getElementById('startScreen')
startScreen.style.display = 'block'

let word = [];
let correctGuessesArray = Array(word.length).fill('');;
let alreadyGuessed = false;

function hideShow(){
  startScreen.style.display = 'none'
  canvas.style.display = 'block'
}

const randomButton = document.getElementById('randomWordButton')
randomButton.addEventListener('click', function(){
  word = randomWords().toLowerCase().split('');
  hideShow();
  startGame();
})

const ownWord = document.getElementById('ownWordButton')
ownWord.addEventListener('click', function(e){
  word = document.getElementById('wordInput').value
  hideShow();
  startGame();
})

const resetButton = document.getElementById('startOver')
resetButton.addEventListener('click', reset)

function reset(){
  location.reload();
}

function startGame(){
  drawParts.gameArea.start();
  drawParts.frame(); //call this before addGuess so that 'word' is drawn on top of frame
  addGuess(guesses, word, wrongGuessCount, alreadyGuessed, correctGuessesArray);
}

