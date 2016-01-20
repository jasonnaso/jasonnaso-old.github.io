(function($){

	//set global dates for google analytics
	var d = new Date();
	var month = d.getMonth();
	var currentMonth = month + 1;	
	var currentYear = d.getFullYear();

	wings = {

		init: function(){
			
			//set var for current wing//split at the "-" to be able to match country types
			var currentWing;
			var bodyCountryCode = $("body").data('country');
			
			//loop through wings data for all data-attr information
			$('.wings-data').each(function (i, wingsData){

				var countryCodes = $(wingsData).data("country-code");

				for (i = 0; i < countryCodes.length; i++) { 
    				
    				var splitCode  = countryCodes.split(",");

    				var countryCode = splitCode[i];
    			
    				console.log(splitCode, countryCode);
				
				//check if current country code matches "li's" bodyCountryCode 
				//we check if they match to set correct current country 
				//if none then default to row (rest of world data)
				//var countryCode = $(this).data('country-code');				

				if (countryCode == bodyCountryCode){

					currentWing = $(this);
					return false;

				 }else{

					currentWing = $('.wings-default');
				 	countryCode = "row";
				}

			}
			});

			// Build the wings and background image
			wings.setBackground(currentWing);
			wings.setWings(currentWing, bodyCountryCode);		

		},
		
		//set the correct background picture foe current country code						
		setBackground: function(currentWing){
			
			//set current background style to a var and use to set pic to the article div
			var backgroundStyle = $(currentWing).data("background-style");
				
			$("#article").css("background", backgroundStyle);

		},

		//build seperate wings for click on page with separate urls if needed
		setWings: function(currentWing, bodyCountryCode){
			console.log(bodyCountryCode);
			//data-wing-left and right hold the urls
			//data-new-tab-left/right to set them to true or false (if we want it to open a new tab)
			var wingsLinkLeft = $(currentWing).data('wing-left');  
			var wingsLinkRight = $(currentWing).data('wing-right');
			var newTabLeft = $(currentWing).data('new-tab-left');
			var newTabRight = $(currentWing).data('new-tab-right');
			
			//append the hrefs to the li for the links
			$('#header').append("<a href='" + wingsLinkLeft + "' class='wings-left'></a><a href='" + wingsLinkRight + "' class='wings-right'></a>");

			//check if new tab is required (true or false) and apply the target _blank
			if (newTabLeft){

				$(".wings-left").attr('target','_blank');
			}

			if (newTabRight){

				$(".wings-right").attr('target','_blank');
			}

			//push click info to google analytics	
			$('.wings-left').click(function() { _gaq.push(['_trackEvent', 'Wings Graphic', 'Click', bodyCountryCode +'-left'+currentMonth+'-'+currentYear]);});
	        $('.wings-right').click(function() { _gaq.push(['_trackEvent', 'Wings Graphic', 'Click', bodyCountryCode+'-right'+currentMonth+'-'+currentYear]);});
        }
	};

// if(Response.viewportW() > 1420) {
// 
// }	
wings.init();

})(jQuery);























// (function($){
// 			//set global dates for google analytics
// 			var d = new Date();
// 			var month = d.getMonth();
// 			var currentMonth = month + 1;	
// 			var currentYear = d.getFullYear();

// 	pageInit = {

// 		init: function(){
			
// 			//set var for current wing//split at the "-" to be able to match country types
// 			var currentWing;
// 			var splitcountryCode = ($("#article").attr('class').split("-")[1]);

// 			//loop through wings data for all data-attr information
// 			$('.wings-data').each(function (i, wingsData){

// 				for ()


// 				//check if current country code matches "li's" splitCountrycode 
// 				//we check if they match to set correct current country 
// 				//if none then default to row (rest of world data)
// 				var countryCode = $(this).data('country-code');

// 				if (countryCode == splitcountryCode){

// 					//console.log(countryCode, splitcountryCode);

// 					currentWing = $(this);
// 					console.log(currentWing);
// 					pageInit.setWings(currentWing, countryCode);
// 					pageInit.backgroundPic(currentWing);
// 					return false;

// 				 }else{

// 					currentWing = $('.wings-default');
// 				 	console.log("else");
// 				 	pageInit.setWings(currentWing, countryCode);
// 				 	pageInit.backgroundPic(currentWing);
// 				}
// 			});
// 		},
		
// 		//set the correct background picture foe current country code						
// 		backgroundPic: function(currentWing){
			
// 			//set current background style to a var and use to set pic to the article div
// 			var backgroundStyle = $(currentWing).data("background-style");
// 			setTimeout(function(){

// 				$("#article").css("background", backgroundStyle).addClass("fade-in-wings");
// 			}, 1000);
// 		},

// 		//build seperate wings for click on page with separate urls if needed
// 		setWings: function(currentWing, countryCode){

// 			//data-wing-left and right hold the urls
// 			//data-new-tab-left/right to set them to true or false (if we want it to open a new tab)
// 			var wingsLinkLeft = $(currentWing).data('wing-left');  
// 			var wingsLinkRight = $(currentWing).data('wing-right');
// 			var newTabLeft = $(currentWing).data('new-tab-left');
// 			var newTabRight = $(currentWing).data('new-tab-right');
			
// 			//append the hrefs to the li for the links
// 			$('#article').append("<a href='" + wingsLinkLeft + "' class='wings-left'></a><a href='" + wingsLinkRight + "' class='wings-right'></a>");

// 				//check if true or false (true if a new tab is needed)and apply the target _blank
// 				if (newTabLeft){

// 					$(".wings-left").attr('target','_blank');
// 				}

// 					if (newTabRight){

// 						$(".wings-right").attr('target','_blank');
// 					}

// 				//push click info to google analytics	
// 				$('.wings-left').click(function() { 
		    
// 		         	//_gaq.push(['_trackEvent', 'Wings Graphic', 'Click', countryCode + '-left'+currentMonth+'-'+currentYear]);
// 		         	});
// 		         	//$('.wings-right').click(function() { _gaq.push(['_trackEvent', 'Wings Graphic', 'Click', countryCode+'-right'+currentMonth+'-'+currentYear]);});
//         }
// 	};

// pageInit.init();

// })(jQuery);