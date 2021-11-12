var canvas = document.getElementById("cl");
var ctx = canvas.getContext("2d");
ctx.fillStyle='red';
ctx.strokeStyle='green';
ctx.moveTo(100, 25);
ctx.quadraticCurveTo(75, 0, 50, 25);

ctx.quadraticCurveTo(25, 75, 100, 90);
ctx.quadraticCurveTo(175, 75, 150, 25);
ctx.quadraticCurveTo(125, 0, 100, 25);
ctx.stroke();
ctx.fill();
  


canvas.onmoysemove = function(event) {
  var x = event.offsetX;
  var y = event.offsetY;
  ctx.clearRect(0, 0, 200, 100);
  ctx.beginPath();
  ctx.moveTo(25, 25);
  ctx.quadraticCurveTo(x, y, 25, 75);

  ctx.closePath();
  ctx.stroke();
}
