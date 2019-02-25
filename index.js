import letterKeyCodes from '/keycodes.js'

let wrongGuessCount = 6;
let guesses = {};

function startGame(){
  gameArea.start();
  addGuess();
  frame();

  if(wrongGuessCount > 0) { head() };
  if(wrongGuessCount > 1) { body() };
  if(wrongGuessCount > 2) { rightArm() };
  if(wrongGuessCount > 3) { leftArm() };
  if(wrongGuessCount > 4) { leftLeg() };
  if(wrongGuessCount > 5) { rightLeg() };
  if(wrongGuessCount > 5) { gameOver() };

  console.log(letterKeyCodes[65])
}


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
  ctx = gameArea.context;
  ctx.fillStyle = "black";
  ctx.fillRect(400, 50, 15, 300) //vertical post
  ctx.fillRect(250, 50, 150, 15 ) //horizotal top beam
  ctx.fillRect(0, 350, 500, 200 ) //base
}

function head(){
  ctx = gameArea.context;
  ctx.beginPath();
  ctx.arc(250, 100, 30, 0, Math.PI * 2, true);
  ctx.fill();
}

function body(){
  ctx = gameArea.context;
  ctx.fillRect(245, 135, 10, 100)
}

function rightArm(){
  ctx = gameArea.context;
  ctx.fillRect(180, 135, 60, 10)
}

function leftArm(){
  ctx = gameArea.context;
  ctx.fillRect(260, 135, 60, 10)
}

function leftLeg(){
  ctx = gameArea.context;
  ctx.beginPath();
  ctx.moveTo(258, 233)
  ctx.lineTo(328, 303)
  ctx.lineTo(321, 310)
  ctx.lineTo(251, 240)
  ctx.fill()
}

function rightLeg(){
  ctx = gameArea.context;
  ctx.beginPath();
  ctx.moveTo(242, 233)
  ctx.lineTo(249, 240)
  ctx.lineTo(179, 310)
  ctx.lineTo(172, 303)
  ctx.fill();
}

function gameOver(){
  ctx = gameArea.context;
  ctx.font = '24px serif';
  ctx.fillStyle = 'red'
  ctx.fillText('GAME OVER', 175, 30)
}

function addGuess(){
  window.addEventListener('keydown', function (e){
    if(!guesses[e.keyCode]) { guesses[e.keyCode] = true }
  })
}

