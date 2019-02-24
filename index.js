function startGame(){
  gameArea.start();
  frame();
  head();
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
  ctx.fillRect(0, 350, 500, 100 ) //base
}

function head(){
  ctx = gameArea.context;
  ctx.beginPath();
  ctx.arc(250, 100, 30, 0, Math.PI * 2, true);
  ctx.fill();

}

