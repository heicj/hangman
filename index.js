function startGame(){
  gameArea.start();
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