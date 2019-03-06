const gameArea = {
  canvas: document.getElementById("myCanvas"),

  start: function(){
    this.canvas.width = 500,
    this.canvas.height = 500,
    this.context = this.canvas.getContext("2d"),
    document.body.insertBefore(this.canvas, document.body.childNodes[0])
  }
}

function frame(){
  let ctx = gameArea.context;
  ctx.fillStyle = "black";
  ctx.fillRect(400, 50, 15, 300) //vertical post
  ctx.fillRect(250, 50, 150, 15 ) //horizotal top beam
  ctx.fillRect(0, 350, 500, 200 ) //base
}

function head(){
  let ctx = gameArea.context;
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(250, 100, 30, 0, Math.PI * 2, true);
  ctx.fill();
}

function body(){
  let ctx = gameArea.context;
  ctx.fillStyle = 'black';
  ctx.fillRect(245, 135, 10, 100)
}

//hangman's right
function rightArm(){
  let ctx = gameArea.context;
  ctx.fillStyle = 'black';
  ctx.fillRect(180, 135, 60, 10)
}

//hangman's left
function leftArm(){
  let ctx = gameArea.context;
  ctx.fillStyle = 'black';
  ctx.fillRect(260, 135, 60, 10)
}

//hangman's left
function leftLeg(){
  let ctx = gameArea.context;
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.moveTo(258, 233)
  ctx.lineTo(328, 303)
  ctx.lineTo(321, 310)
  ctx.lineTo(251, 240)
  ctx.fill()
}

//hangman's right
function rightLeg(){
  let ctx = gameArea.context;
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.moveTo(242, 233)
  ctx.lineTo(249, 240)
  ctx.lineTo(179, 310)
  ctx.lineTo(172, 303)
  ctx.fill();
}

function gameOver(word){
  // window.removeEventListener('keydown')
  let ctx = gameArea.context;
  ctx.font = '30px serif';
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 500, 500)
  ctx.fillStyle = 'red';
  ctx.fillText('GAME OVER', 175, 100)
  ctx.fillText(`ANSWER WAS: ${word.join('')}`, 200 - (word.length * 10), 150)
}


function drawWrongGuesses(wrongGuessCount){
  if(wrongGuessCount > 0) { head() };
  if(wrongGuessCount > 1) { body() };
  if(wrongGuessCount > 2) { rightArm() };
  if(wrongGuessCount > 3) { leftArm() };
  if(wrongGuessCount > 4) { leftLeg() };
  if(wrongGuessCount > 5) { rightLeg() };
  // if(wrongGuessCount > 5) { gameOver() };
}

function drawWord(correctGuessesArray){
  let ctx = gameArea.context;
  ctx.font = '20px arial';
  let startpx = (250 - (25 *(correctGuessesArray.length/2)));
  let y = 380;
  
  for(let i = 0; i < correctGuessesArray.length; i++){
      ctx.fillStyle = 'white';
      ctx.fillText('_', (startpx + (i * 25)), y)
      ctx.fillText(correctGuessesArray[i].toUpperCase(), (startpx + (i * 25)), y)
  }
}

function drawAlphabetAndGuesses(guesses){
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let guessesArray = Object.keys(guesses)
  let ctx = gameArea.context;
  ctx.font = '26px serif';
  
  ctx.fillStyle = 'white'
  ctx.fillText('LETTERS', 190, 440)
  
  for(let i = 0; i < alphabet.length; i ++){
    if(!guessesArray.includes(alphabet[i])){
      ctx.fillStyle = 'white';
      ctx.fillText(alphabet[i], 10 + (19 * i), 470)
    }
    else{
      ctx.fillStyle = 'red'
      ctx.fillText(alphabet[i], 10 + (19 * i), 470)
      ctx.fillStyle = 'red'
      ctx.fillText(alphabet[i], 10 + (19 * i), 470)
    }
  }
}

module.exports = drawParts = {
    gameArea,
    frame,
    head,
    body,
    rightArm,
    rightLeg,
    leftArm,
    leftLeg,
    gameOver,
    drawWrongGuesses,
    drawWord,
    drawAlphabetAndGuesses
}