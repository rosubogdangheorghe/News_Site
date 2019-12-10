var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;
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

    /*var a=250;
    var b=0;
    var c = 465;
    var d = 375;
    var e = 35;
    var f = 375*/
