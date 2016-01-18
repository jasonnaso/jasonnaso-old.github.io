


$(function() {
    $(".border, #content").hide();
    $("#topbar").show();
    $("#topbar").animate({width: "100%"},1000, function() {
      $("#rightbar").show();
      $("#rightbar").animate({height: "100%"},1000, function() {
        $("#bottombar").show();
        $("#bottombar").animate({width: "100%"},1000, function() {
          $("#leftbar").show();
          $("#leftbar").animate({height: "100%"},1000, function() {
            $("#content").fadeIn(1000);
          });
        });
      });
    });
  });




var ctx = document.querySelector("canvas").getContext("2d"),
    dashLen = 220, dashOffset = dashLen, speed = 10,
    txt = "Jason Naso", x = 30, i = 0;

ctx.font = "100px Comic Sans MS, cursive, TSCu_Comic, sans-serif"; 
ctx.lineWidth = 5; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
ctx.strokeStyle = ctx.fillStyle = "red";

(function loop() {
  ctx.clearRect(x, 0, 60, 150);
  ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
  dashOffset -= speed;                                         // reduce dash length
  ctx.strokeText(txt[i], x, 90);                               // stroke letter

  if (dashOffset > 0) requestAnimationFrame(loop);             // animate
  else {
    ctx.fillText(txt[i], x, 90);                               // fill final letter
    dashOffset = dashLen;                                      // prep next char
    x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
    //ctx.setTransform(1, 0, 0, 1, 0, 3 * M ath.random());        // random y-delta
    //ctx.rotate(Math.random() * 0.005);                         // random rotation
    if (i < txt.length) requestAnimationFrame(loop);
  }
})();
//http://jsbin.com/isoqi4/5/edit?html,js,output
//https://www.html5andbeyond.com/css3-animated-backgrounds-infinite-scrolling-background/


// var img = new Image();

// // User Variables - customize these to change the image being scrolled, its
// // direction, and the speed.

// img.src = 'portfolio/assets/images/bg2.jpg';
// //img.src = '../images/code.png';

// //img.src = 'http://www.planwallpaper.com/static/images/Winter-Tiger-Wild-Cat-Images.jpg';

//     var CanvasXSize = 1600;
//     var CanvasYSize = 400;
// var speed = 50; //lower is faster
// var scale = 1.05;
// var y = -4.5; //vertical offset

// // Main program

// var dx = 0.75;
// var imgW;
// var imgH;
// var x = 0;
// var clearX;
// var clearY;
// var ctx;

// img.onload = function() {

//     imgW = img.width*scale;
//     imgH = img.height*scale;
//     if (imgW > CanvasXSize) { x = CanvasXSize-imgW; } // image larger than canvas
//     if (imgW > CanvasXSize) { clearX = imgW; } // image larger than canvas
//     else { clearX = CanvasXSize; }
//     if (imgH > CanvasYSize) { clearY = imgH; } // image larger than canvas
//     else { clearY = CanvasYSize; }
//     //Get Canvas Element
//     ctx = document.getElementById('canvas').getContext('2d');
//     //Set Refresh Rate
//     return setInterval(draw, speed);
// };

// function draw() {

//     //Clear Canvas
//     ctx.clearRect(0,0,clearX,clearY);
//     //If image is <= Canvas Size
//     if (imgW <= CanvasXSize) {
//         //reset, start from beginning
//         if (x > (CanvasXSize)) { x = 0; }
//         //draw aditional image
//         if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); }
//     }
//     //If image is > Canvas Size
//     else {
//         //reset, start from beginning
//         if (x > (CanvasXSize)) { x = CanvasXSize-imgW; }
//         //draw aditional image
//         if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-imgW+1,y,imgW,imgH); }
//     }
//     //draw image
//     ctx.drawImage(img,x,y,imgW,imgH);
//     //amount to move
//     x += dx;
// }













// $(function() { console.log( "document ready!" ); (".findMeOn").html("http://jasonnaso.github.io/", "linkedin", "danaz45@hotmail.com"); var ethics = 100;
// var jasonNaso = "juniorWebDeveloper"; var education = "jensenYrkeshögskola"; var workPlace = "armchairPartnersLtd"; findYourCenter(inAllPartsOfLife);
// var hardWorkerPercentage = 100; var teamPlayer = true; var loyaltyPercentage = 100; var selfMotivation = true; var helpsOthers = true;
// stayFocused(); keepOnLearning(); stressLevelTest(); allMyGoals(work, life); function show(){$(".inspirationText").html("Excellent");}function stayFocused(){if (tired){takeARest = true; } else { keepWorkingHard = true; $('.inspirationText').html("Try to stay focused");} }
// function keepOnLearning(){if (youKnowItAll){ youKnowItAll = false; } else { studyMore = true;}} function allMyGoals(x, y, z)
// {if ((x === "KeepMovingForward") && (y === "helpOthers"));{ show();}} function thanksForVisitingMyPage(){var haveANiceDay = 1000000000000000; }}); 


