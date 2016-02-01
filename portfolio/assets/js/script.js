$(function() {
    
    drawName();

    $("img").hover(function() {

        var imgHover = $(this).data("type");

        if (imgHover === "left"){

             $(this).addClass("transition-left");
        }

        if (imgHover === "right"){

             $(this).addClass("transition-right");
        }

        if(imgHover === "zoom"){

            $(this).addClass("transition-zoom");
        }

        if(imgHover === "shadow"){

            $(this).addClass("transition-shadow");
        }
    }, 

    function() {

        var imgHover = $(this).data("type");
        
        $(this).removeClass("transition-" + imgHover);


    });

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
            ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); 
            dashOffset -= speed;                                         
            ctx.strokeText(txt[i], x, 150);                              

            if (dashOffset > 0) requestAnimationFrame(loop);             
            
            else {
                
                ctx.fillText(txt[i], x, 150);                               
                dashOffset = dashLen;                                    
                x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
                if (i < txt.length) requestAnimationFrame(loop);
            }

        })();
    }       
});






















//Draw Line

// var topLine = "#lineOne";

// drawLine(topLine);

// function drawLine(topLine){

//     $(".draw-line").hide();

//     $(topLine).show();
//     $(topLine).animate({width: "100%"},700, function() {

//         $(topLine).animate({width: "0%"},700);

//     });

// }