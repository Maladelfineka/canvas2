// alert('wiadomosc'); pokazuje "alert na stronie"

let canvas = document.querySelector('#canvas');
console.log(canvas);

var ctx = canvas.getContext('2d');
ctx.fillStyle = "black";
ctx.fillRect(50,50,50,50)

ctx.fillStyle = "green";
ctx.fillRect(150,150,25,50)

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;
ctx.beginPath();

ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'blue'
ctx.fill()
ctx.strokeStyle = 'blue'
ctx.stroke();

ctx.fillStyle = "red";
ctx.fillRect(450,450,50,50)

ctx.fillStyle = "orange";
ctx.fillRect(0,450,55,50)

ctx.fillStyle = "yellow";
ctx.fillRect(450, 0,55,50)


ctx.fillStyle = "grey";
ctx.fillRect(0,0,55,50)