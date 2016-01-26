move();
function move (){
console.log("here");
$(".hello").animate({left: '250px'});

}

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
    txt = "Jason  Naso ", x = 200, i = 0;
ctx.font = "70px Play, Amatic SC   "; 
ctx.lineWidth = 2; ctx.lineJoin = "round";
ctx.strokeStyle = ctx.fillStyle = "#68a8ad";

(function loop() {
  ctx.clearRect(x, 0, 200, 150);
  ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
  dashOffset -= speed;                                         // reduce dash length
  ctx.strokeText(txt[i], x, 150);                               // stroke letter

  if (dashOffset > 0) requestAnimationFrame(loop);             // animate
  else {
    ctx.fillText(txt[i], x, 150);                               // fill final letter
    dashOffset = dashLen;                                      // prep next char
    x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
    // ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
    // ctx.rotate(Math.random() * 0.005);                         // random rotation
    if (i < txt.length) requestAnimationFrame(loop);
  }
})();



    $('.all-img').hover(function() {

        $(this).addClass('transition');
 
    }, function() {
      
        $(this).removeClass('transition');
    });


















// $(function() { console.log( "document ready!" ); (".findMeOn").html("http://jasonnaso.github.io/", "linkedin", "danaz45@hotmail.com"); var ethics = 100;
// var jasonNaso = "juniorWebDeveloper"; var education = "jensenYrkeshögskola"; var workPlace = "armchairPartnersLtd"; findYourCenter(inAllPartsOfLife);
// var hardWorkerPercentage = 100; var teamPlayer = true; var loyaltyPercentage = 100; var selfMotivation = true; var helpsOthers = true;
// stayFocused(); keepOnLearning(); stressLevelTest(); allMyGoals(work, life); function show(){$(".inspirationText").html("Excellent");}function stayFocused(){if (tired){takeARest = true; } else { keepWorkingHard = true; $('.inspirationText').html("Try to stay focused");} }
// function keepOnLearning(){if (youKnowItAll){ youKnowItAll = false; } else { studyMore = true;}} function allMyGoals(x, y, z)
// {if ((x === "KeepMovingForward") && (y === "helpOthers"));{ show();}} function thanksForVisitingMyPage(){var haveANiceDay = 1000000000000000; }}); 


