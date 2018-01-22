/***********************
* SuspiciousUser       *
* Created : 11.02.2017 *
* Updated : --.--.---- *
***********************/

//Please leave a comment for bugs. I will fix it.

function flag() {
    var g = 480;
    var l = g * 1.5;
    var a = g * 0.5;
    var b = a;
    var c = g * 0.0625;
    var d = g * 0.4;
    var e = g * 0.33;
    var f = g * 0.25;
    var m = g * 0.033;
    
    var canvas = document.getElementById("flagTR");
    var context = canvas.getContext("2d");
    var context2 = context;
    
    var outerRadius = b / 2;
    var innerRadius = d / 2;
    var starRadius = f / 2;
    
    context.beginPath();
    context.rect(0, 0, 720, 480);
    context.fillStyle = "rgb(227, 10, 23)";
    context.fill();
    context.lineWidth = 0;
    context.strokeStyle = "rgb(227, 10, 23)";
    context.stroke();
    
    context.beginPath();
    context.arc(a + m, g / 2, outerRadius, 0 * Math.PI, 2 * Math.PI);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 0;
    context.strokeStyle = "white";
    context.stroke();
    
    context.beginPath();
    context.arc(a + c + m, g / 2, innerRadius, 0 * Math.PI, 2 * Math.PI);
    context.fillStyle = "rgb(227, 10, 23)";
    context.fill();
    context.lineWidth = 0;
    context.strokeStyle = "rgb(227, 10, 23)";
    context.stroke();
    
   /*context.beginPath();
    context.arc(m + a + c - innerRadius + e + starRadius, g / 2, starRadius, 0 * Math.PI, 2 * Math.PI);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 0;
    context.strokeStyle = "white";
    context.stroke();*/
    
    /*context2.beginPath();
    context2.translate(m + a + c - innerRadius + e + starRadius, g / 2);

// initial offset rotation so our star is straight
    context2.rotate((Math.PI * 4 / 10));

// make a point, 5 times
    for (var i = 5; i--;) {
        // draw line up
        context2.lineTo(0, starRadius);
        // move origin to current same location as pen
        context2.translate(0, starRadius);
        // rotate the drawing board
        context2.rotate((Math.PI * 2 / 10));
        // draw line down
        context2.lineTo(0, -starRadius);
        // again, move origin to pen...
        context2.translate(0, -starRadius);
        // ...and rotate, ready for next arm
        context2.rotate(-(Math.PI * 6 / 10));
    }
    // last line to connect things up
    context2.lineTo(0, starRadius);
    context2.closePath();
	context2.fillStyle = "white";
    context2.fill();
    // stroke the path, you could also .fill()
	context2.strokeStyle = "white";
    context2.stroke();*/
    
    context2.beginPath();
    //context2.moveTo(m + a + c - innerRadius + e + starRadius, g / 2);
//    context2.lineTo(351.406, 240.963);
//    context2.lineTo(460.382, 276.372);
//   context2.lineTo(393.030, 183.671);
//    context2.lineTo(393.030, 298.256);
//    context2.lineTo(460.382, 205.554);
	context2.lineTo(g / 1.3659, g / 1.992);
	context2.lineTo(g / 1.0426, g / 1.7367);
	context2.lineTo(g / 1.2212, g / 2.6133);
	context2.lineTo(g / 1.2212, g / 1.6093);
	context2.lineTo(g / 1.0426, g / 2.3351);
    context2.closePath();
    context2.fillStyle = "white";
    context2.fill();
    
}