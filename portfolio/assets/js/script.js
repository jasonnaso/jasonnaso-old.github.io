$(function() {

    (function init(){

        drawName();


    })();

    function drawName(){

        //Canvas for name drawing
        var ctx = document.querySelector("canvas").getContext("2d");
        var dashLen = 220;
        var dashOffset = dashLen; 
        var speed = 10;
        var txt = "Jason  Naso "; 
        var x = 200; 
        var i = 0;
        
        ctx.font = "70px Play, Amatic SC   "; 
        ctx.lineWidth = 2; 
        ctx.lineJoin = "round";
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
    }

        $('.all-img').hover(function() {

            $(this).addClass('transition');

            }, 

            function() {

                $(this).removeClass('transition');
            });

    //Draw Line

    var topLine = "#lineOne";
    // var bottomLine = "#";
    drawLine(topLine);



    function drawLine(topLine){

        // $(window).on("scroll");
        $(".border").hide();

        $(topLine).show();
        $(topLine).animate({width: "100%"},1000, function() {

            $(topLine).animate({width: "0%"},1000);
        //     $(bottomLine).show();
        //     $(bottomLine).animate({width: "100%"},1000, function() {

        //         $(bottomLine).animate({width: "0%"},1000);
          
        // });
            

        });

    }

    var waypoint = new Waypoint({

      element: document.getElementById('waypointone'),
      handler: function(direction) {

        console.log('Scrolled to waypoint!');
        topLine = "#lineTwo";
        drawLine(topLine);

        }
    });

    var waypoint = new Waypoint({

      element: document.getElementById('waypointtwo'),
      handler: function(direction) {

        console.log('Scrolled to waypoint three!');
        topLine = "#lineThree";
        drawLine(topLine);

        }
    });

    var waypoint = new Waypoint({

      element: document.getElementById('waypointthree'),
      handler: function(direction) {

        console.log('Scrolled to waypoint four!');
        topLine = "#lineFour";
        drawLine(topLine);

        }
    });
  
        
            //  $(window).scroll(function() {

            //     if ($(document).scrollTop() > 100) {

            //         console.log("> 100");
            //         executed = true;
                
            //         topLine = "#lineTwo";
            //         // var bottomLine = "#lineFour";
            //         drawLine(topLine);
            //         // $(window).off("scroll");
            //     }
            // });

            //   $(window).scroll(function() {

            //      if (window.pageYOffset > 400) {
            //          // executed = true;
            //          console.log("> 400");
            //          // // $(bottomLine).animate({width: "0%"},1000);

            //          //  topLine = "#lineThree";
            //          // // var bottomLine = "#lineFour";
            //          // drawLine(topLine);
            //          $(window).off("scroll");
            //      }
            //  });
});
    // window.onscroll = testScroll;
    //http://stackoverflow.com/questions/5672320/trigger-events-when-the-window-is-scrolled-to-certain-positions
    //http://stackoverflow.com/questions/12713564/function-in-javascript-that-can-be-called-only-once
   







  






//Draw Line
//$(".border, #content").hide();
// $("#topbar").show();

// $("#topbar").animate({width: "100%"},1000, function() {
//     $("#rightbar").show();
  
//     $("#rightbar").animate({height: "100%"},1000, function() {
//         $("#bottombar").show();

//         $("#bottombar").animate({width: "100%"},1000, function() {
//             $("#leftbar").show();
            
//             $("#leftbar").animate({height: "100%"},1000, function() {
//                 $("#content").fadeIn(1000);
//             });
//         });
//     });
// });











// $(function() { console.log( "document ready!" ); (".findMeOn").html("http://jasonnaso.github.io/", "linkedin", "danaz45@hotmail.com"); var ethics = 100;
// var jasonNaso = "juniorWebDeveloper"; var education = "jensenYrkeshögskola"; var workPlace = "armchairPartnersLtd"; findYourCenter(inAllPartsOfLife);
// var hardWorkerPercentage = 100; var teamPlayer = true; var loyaltyPercentage = 100; var selfMotivation = true; var helpsOthers = true;
// stayFocused(); keepOnLearning(); stressLevelTest(); allMyGoals(work, life); function show(){$(".inspirationText").html("Excellent");}function stayFocused(){if (tired){takeARest = true; } else { keepWorkingHard = true; $('.inspirationText').html("Try to stay focused");} }
// function keepOnLearning(){if (youKnowItAll){ youKnowItAll = false; } else { studyMore = true;}} function allMyGoals(x, y, z)
// {if ((x === "KeepMovingForward") && (y === "helpOthers"));{ show();}} function thanksForVisitingMyPage(){var haveANiceDay = 1000000000000000; }}); 



    //Draw Line
//     function drawLine(topLine, bottomLine){
//         $(".border").hide();

//         $(topLine).show();
//         $(topLine).animate({width: "100%"},1000, function() {

//             $(topLine).animate({width: "0%"},1000);
//             $(bottomLine).show();
//             $(bottomLine).animate({width: "100%"},1000, function() {

//                 $(bottomLine).animate({width: "0%"},1000);
          
//         });
//     });

// }
    
//     var testScroll = (function() {
//         console.log("Testscroll called");
//         var executed = false;

//         return function () {

//                if (!executed && window.pageYOffset > 600) {

              
                

//                 executed = true;
                
                // $(bottomLine).animate({width: "0%"},1000);

            //     var topLine = "#lineThree";
            //     var bottomLine = "#lineFour";
            //     drawLine(topLine, bottomLine);
            // }

            // if (!executed && window.pageYOffset > 600) {

              
                

            //     executed = true;
                
                // $(bottomLine).animate({width: "0%"},1000);

    //             var topLine = "#lineThree";
    //             var bottomLine = "#lineFour";
    //             drawLine(topLine, bottomLine);
    //         }
    //     };
    // })();
    // window.onscroll = testScroll;
    //http://stackoverflow.com/questions/5672320/trigger-events-when-the-window-is-scrolled-to-certain-positions
    //http://stackoverflow.com/questions/12713564/function-in-javascript-that-can-be-called-only-once
    // var topLine = "#lineOne";
    // var bottomLine = "#lineTwo";
    // drawLine(topLine, bottomLine);

