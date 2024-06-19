// alert('wiadomosc'); pokazuje "alert na stronie"

let canvas = document.querySelector('#canvas');
console.log(canvas);

var ctx = canvas.getContext('2d');
ctx.fillStyle = "purple";
ctx.fillRect(100,100,50,50)

ctx.fillStyle = "red";
ctx.fillRect(50,50,25,50)

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;
ctx.beginPath();

ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'pink'
ctx.fill()
ctx.strokeStyle = 'pink'
ctx.stroke();