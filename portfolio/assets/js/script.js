$body = $("body");

    delay();
    function delay (){



    }

  

    go();

    function go () {

        var topbar = "#topbar";

        var lineLength = (randomize());
        
        $(".border, #content").hide();

        $("#topbar").show();

        $(topbar).animate({width: lineLength}, 500, function() {

          $("#content").fadeIn("fast"); 

        });
      }

    function randomize(){

      var beenRandomized = Math.round(Math.random() * 400);

      return beenRandomized;
    }


// $("#rightbar").show();

// $("#rightbar").animate({height: '150px'},500, function() {

//   $("#bottombar").show();

//   $("#bottombar").animate({width: '520px'},500, function() {

//     $("#leftbar").show();

//     $("#leftbar").animate({height: '150px'},500, function() {

//       $("#content").fadeIn(1000); 

//     });
//   });
// });



var img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.

img.src = 'portfolio/assets/images/bg2.jpg';
//img.src = '../images/code.png';

//img.src = 'http://www.planwallpaper.com/static/images/Winter-Tiger-Wild-Cat-Images.jpg';

    var CanvasXSize = 1600;
    var CanvasYSize = 100;
var speed = 50; //lower is faster
var scale = 1.05;
var y = -4.5; //vertical offset

// Main program

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {

    imgW = img.width*scale;
    imgH = img.height*scale;
    if (imgW > CanvasXSize) { x = CanvasXSize-imgW; } // image larger than canvas
    if (imgW > CanvasXSize) { clearX = imgW; } // image larger than canvas
    else { clearX = CanvasXSize; }
    if (imgH > CanvasYSize) { clearY = imgH; } // image larger than canvas
    else { clearY = CanvasYSize; }
    //Get Canvas Element
    ctx = document.getElementById('canvas').getContext('2d');
    //Set Refresh Rate
    return setInterval(draw, speed);
};

function draw() {

    //Clear Canvas
    ctx.clearRect(0,0,clearX,clearY);
    //If image is <= Canvas Size
    if (imgW <= CanvasXSize) {
        //reset, start from beginning
        if (x > (CanvasXSize)) { x = 0; }
        //draw aditional image
        if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); }
    }
    //If image is > Canvas Size
    else {
        //reset, start from beginning
        if (x > (CanvasXSize)) { x = CanvasXSize-imgW; }
        //draw aditional image
        if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-imgW+1,y,imgW,imgH); }
    }
    //draw image
    ctx.drawImage(img,x,y,imgW,imgH);
    //amount to move
    x += dx;
}
