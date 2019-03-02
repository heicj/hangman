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
  ctx.beginPath();
  ctx.arc(250, 100, 30, 0, Math.PI * 2, true);
  ctx.fill();
}

function body(){
  let ctx = gameArea.context;
  ctx.fillRect(245, 135, 10, 100)
}

//hangman's right
function rightArm(){
  let ctx = gameArea.context;
  ctx.fillRect(180, 135, 60, 10)
}

//hangman's left
function leftArm(){
  let ctx = gameArea.context;
  ctx.fillRect(260, 135, 60, 10)
}

//hangman's left
function leftLeg(){
  let ctx = gameArea.context;
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
  ctx.beginPath();
  ctx.moveTo(242, 233)
  ctx.lineTo(249, 240)
  ctx.lineTo(179, 310)
  ctx.lineTo(172, 303)
  ctx.fill();
}

function gameOver(){
  let ctx = gameArea.context;
  ctx.font = '24px serif';
  ctx.fillStyle = 'red'
  ctx.fillText('GAME OVER', 175, 30)
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
    gameOver
}