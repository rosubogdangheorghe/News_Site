var myCanvas = document.getElementById('myCanvas');
var ctx = myCanvas.getContext('2d');

var cw = myCanvas.width;
var ch = myCanvas.height;
var angle = 0;
  
var p = 10;
var r = ch / 2;


function star() {

    var x = 2 * r;
    var y = r;
    var x1 = cw / 2;
    var y1 = ch / 2;

    ctx.arc(x1, y1, r, 0, 2 * Math.PI);
    ctx.stroke();



    while (angle <= 360) {
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        ctx.lineWidth = 0.1;

        ctx.strokeStyle = '#ffb380';
        ctx.stroke();

        angle = angle + p;
        var cx = r * Math.cos(angle * Math.PI / 180);
        var cy = r * Math.sin(angle * Math.PI / 180);
        x = r + cx;
        y = r + cy;
    }
    setTimeout(function () {star(); }, 1000);
    return;
}
star();

function triangle() {

    var newAngle = 0;
    var newAngleOne = 30;
    var newAngleTwo = 30;
    /*var a;
    var b;
    var c;
    var d;
    var e;
    var f;*/
    var s = 0;
    var pas = 55;
    var h = 0;
    
    while (newAngle < 80) {
        
        var a = r - (r - s) * Math.sin(newAngle * Math.PI / 180);
        var b = r - (r - s) * Math.cos(newAngle * Math.PI / 180);
        var c = r + (r - s) * Math.cos(newAngleTwo * Math.PI / 180);
        var d = r + (r - s) * Math.sin(newAngleTwo * Math.PI / 180);
        var e = r - (r - s) * Math.cos(newAngleOne * Math.PI / 180);
        var f = r + (r - s) * Math.sin(newAngleOne * Math.PI / 180);

        
        ctx.beginPath();
        ctx.moveTo(a, b);
        ctx.lineTo(c, d);
        ctx.lineTo(e, f);
        ctx.lineTo(a, b);

        ctx.strokeStyle = 'hsl(' + h + ', 100%, 50%)';
        ctx.stroke();



        
        newAngle = newAngle + p;
        newAngleOne = newAngleOne + p;
        newAngleTwo = newAngleTwo - p;
        h = h + cw;
        s = s + pas;
        pas = pas - 8.5;
    }

    setTimeout(function () {triangle(); }, 1000);
    return;
}

triangle();

/*Color Clock*/

   function colorClock () {
  var date = new Date();
  var hours = date.getHours();
if (hours < 10) {
  hours = '0' + hours;
}
  var minutes = date.getMinutes();
if (minutes < 10) {
  minutes = '0' + minutes;
}
  var seconds = date.getSeconds();
if (seconds < 10) {
  seconds = '0' + seconds;
}
  var clockFace = hours + ':' + minutes + ':' + seconds;
  var hexColor = '#' + seconds + hours + minutes;

  document.getElementById('clock').innerHTML = clockFace;

  document.getElementById('clock').style.background = hexColor;

  setTimeout(function() {colorClock();}, 1000);
console.log(clockFace);
}
colorClock();


/*game areea*/

var myGamePiece;


function startGame() {
    myGameArea.start();
    myGamePiece = new component(30,30,"red",5,120);
}

 var myGameArea = {
   canvas : document.createElement("canvas"),
   start : function () {
   this.canvas.width = 370;
   this.canvas.height = 370;
   this.context = this.canvas.getContext("2d");
  document.body.insertBefore(this.canvas,document.body.childNodes[0]);
   this.interval = setInterval(updateGameArea,20);
   },
   clear : function() {
     this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
   }
 }

 function component(width, height, color, x, y) {
   this.width = width;
   this.height = height;
   this.speedX = 0;
   this.speedY = 0;
   this.x = x;
   this.y = y;
   this.update = function() {
   ctx = myGameArea.context;
   ctx.fillStyle = color;
   ctx.fillRect(this.x,this.y,this.width,this.height);
   }
   this.newPos = function() {
     this.x += this.speedX;
     this.y += this.speedY;
   }
 }



 function updateGameArea() {
   myGameArea.clear();
   myGamePiece.x += 1;
   myGamePiece.newPos();
   myGamePiece.update();
 }

  function moveup() {
    myGamePiece.speedY -= 1;
  }
   function movedown() {
     myGamePiece.speedY += 1;
   } 
   function moveleft() {
     myGamePiece.speedX -= 1;
   } 
  function moveright() {
     myGamePiece.speedX += 1;
   } 