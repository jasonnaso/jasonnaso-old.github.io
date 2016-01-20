  var nasoCustomObj = {

    
    init: function(){
        
        // this.usMap();
        this.chooseRoofComplexity();
        this.truncateString();
        this.imgFadeIn();
        this.calcChoice();
        // this.resultBoxHover();
        this.navBarHighlight();
        // this.randomVideoChoice();
        // this.customVideoChoice();
        
    },

    // pulsate: function(){

    //     var i = 0;
    //       function pulsate() {
    //         if(i >= 1) return;
    //         $(".low-end-map, .naso-estimate-map, .middle-map, .mid-high-map, .high-end-map").
    //           animate({opacity: 0.6}, 800, 'linear').
    //           animate({opacity: 1}, 800, 'linear', pulsate);
    //         i++;
    //       }
    //       pulsate();
    // },

    
    scrollToTop: function(){

        $('html body').animate({

                scrollTop: $(".result-box-title").offset().top - 15

            }, 2000);
        },
    
    randomVideoChoice: function(){

        var video = $(".custom-video");

            if (video.length) {

            var show = Math.floor(Math.random() * video.length);

            for (var i = 0; i < video.length; ++i) {

                if (i !== show) {

                    $(video[i]).hide();
                }
            }
        }
    },

    customVideoChoice: function(){

        console.log("customVideoChoice");

        $('.custom-choice').change(function(){

            console.log(id);


        });
    },

    navBarHighlight: function(){  
        
        $('#navbar a').each(function() {

            if ($(this).prop('href') == window.location.href) {

                $(this).addClass('current-nav-choice');
            }
        });
    },
    
    //Map Hover
    // usMap: function (){

    //     $('.USMap area').each(function () {
    //         // Assigning an action to the mouseover event
    //         $(this).mouseover(function (e) {
                
    //         });
    //     });
    // },

    //Result Box Hover/ mouse over
    // resultBoxHover: function (){

    //     $('.resultsCalc').mouseenter(function () {
    //         // $('.results').each(function (i, resultData){
    //         // Assigning an action to the mouseover event
    //         var mapDevide = $(this).data("result");
    //     });
    // },

    //Drop Down Choose Roof Complexity
    chooseRoofComplexity: function (){

        // console.log("here");
        $('.difficult').removeClass("hiding");
            
        $('.roof-choice').change(function(){


            var roofPic = $(".house-pic");
            var showNewPic = $(this).val();

            $(".house-pic").addClass("hiding");


            $("." + showNewPic).removeClass("hiding");
             
            if (showNewPic === "simple"){

                var simple = "Simple Roof Complexity"; 
                $(".roof-complexity-text").html("<div>" + simple + "</div>");

            }
            if (showNewPic === "medium"){

                var medium = "Medium RoofComplexity"; 
                $(".roof-complexity-text").html("<div>" + medium + "</div>");

            }

            if (showNewPic === "difficult"){

                var difficult = "Difficult Roof Complexity"; 
                $(".roof-complexity-text").html("<div>" + difficult + "</div>");
            }
        });
    },

    truncateString: function  () {

        $(".truncateQuote").each(function(){
           
            var checkLimit = $(this).data("check-limit");
            var textShort = $(this).text().substr(0, checkLimit);
            //var textShort = textShort.substr(0, Math.min(textShort.length, textShort.lastIndexOf(" ")));
            var textLong = $(this).text().substr(checkLimit);

            if ( $(this).text().length > checkLimit ) {

               $(this).html('<span class="excerpt-short">' + '<i class="fa fa-quote-left fa-2x quote"><span>&nbsp;&nbsp;</span></i>' + textShort + '</span><span class="excerpt-more">... <a href="#">read more &#187;</a></span><span class="excerpt-long" style="display:none;">' + textLong + '</span><span class="excerpt-less hiding"> <a href="#">&#171; read less</a></span>');
             //$(this).html('<span class="excerpt-short">' + '<i class="fa fa-quote-left fa-2x"><span>&nbsp;&nbsp;</span></i>' + textShort + '</span><span class="excerpt-more">... <a href="#">read more &#187;</a></span><span class="excerpt-long" style="display:none;">' + textLong + '</span><span class="excerpt-less hiding"> <a href="#">&#171; read less</a></span>');
              }
                 
            $(this).find('.excerpt-more').click(function(event){
                
                event.preventDefault(); 
                $(this).hide(); 
                $(this).parent().find('.excerpt-long').toggle();
                $(this).parent().find('.excerpt-less').show();  
            });
              
            $(this).find('.excerpt-less').click(function(event){
                event.preventDefault(); 
                $(this).hide();   
                $(this).parent().find('.excerpt-long').toggle();
                $(this).parent().find('.excerpt-more').show();    
            });
        });
    },

    imgFadeIn: function(){
                
        //Fade in Houses On Page Load
        $("#calcFade").fadeIn(1200, function(){

            $("#calcFade").addClass("calc-display-pic");

        });
    },

    calcChoice: function(){
                
        //Where is best to have this?? (Came from inside roofCalc)
        //Choose Which Calculator
        $('#calc-choice').change(function() {

            location.href = $(this).val();
        });
    }
};

$(window).load(function(){ nasoCustomObj.init();});

