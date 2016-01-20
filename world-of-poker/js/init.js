var newObj = {

	//Initialize World of poker

	init: function(){

		this.map.init();
		this.feed.parseFeeds();
		this.slideIn.slide();
		this.toggle.buttons();
	},

	//Fires the Feed From Wordpress and R-T-R

	feed: { 
				
		parseFeeds: function(){

			var markerLimit = 10;

	        //Parse the player feed

	        $.getJSON('playerFeed.json', function(info) {

	            var arr = [];
	            var srcArr = info.players;
	            var x = 0;

	            //Limits and shuffles incoming players "feed" by hometown to output random players

	            for (var i = 0; i < markerLimit; i++) {

	            	var k = i + Math.floor(Math.random() * (srcArr.length - i));
	            	var shuffled = srcArr[k];
	            	srcArr[k] = srcArr[i];
	            	srcArr[i] = shuffled;
	            		
	            	var feedType = "player";

	            	//Weeds out  duplicate players/hometowns

	            	if ($.inArray(shuffled.homeTown, arr) == -1) {
	            		arr.push(shuffled.homeTown);
	            		var parsedLocation = (shuffled.homeTown);
	            		//console.log(parsedLocation);
	            		newObj.feed.set(shuffled, feedType, parsedLocation);

	            	}
	            }
			});

	        $.getJSON('eventFeed.json', function(info) {

	            //Actual Wordpress Feed URL
	            //'http://local.raketherake.com/rakeback-news/api/get_category_posts/?category_slug=world-poker-events&custom_fields=Location&callback=?'

	            var arr = [], noduplicates = [];

	            //Parse event Feed from wordpress

	            $.each(info.posts,function(i, post){

	            	var feedType = "event";

	            	//Strips objects of [] and "

	            	var parsedLocation = JSON.stringify(post.custom_fields.Location).replace(/['"]+/g, '').replace(/[\[\]']+/g,'');

	            	//Weeds out  duplicate events/locations

	            	if ($.inArray(parsedLocation, arr) == -1) {

	            		arr.push(parsedLocation);

	            		newObj.feed.set(post, feedType, parsedLocation);
	            	}

	            	//limit event markers

	            	return i < markerLimit; 
	            });

	        });
	            
	    },
	    //Start Set Function
	    set: function(info, feedType, parsedLocation){

	        //Set feedtype to player to allow mulitple feeds with different attributes

	        if(feedType == "player"){

	        	var marker = "marker";
	        	var parsedTitle = info.name;
	        	var parsedExcerpt = info.biography;
	        	//console.log(info.biography);
	        	var iconUrl = info.imageThumbnail;
	        	var parsedNickName = info.nickName;
	        	var parsedTwitterAd = info.twitterScreenName;
	        	var markerContent = '<div class="player-marker"><img src="' + iconUrl + '" alt="' + parsedTitle +'"></div>';

	        }

	        //Set feedtype to event to allow mulitple feeds with different attributes

	        if(feedType == "event"){

	        	var marker = " ";
	        	var parsedTitle = info.title;
	        	var parsedExcerpt = info.content;
	        	var parsedEventDate = info.custom_fields.EventDate;
	        	var iconUrl = 'images/pin-small.png';
	        	var markerContent = '<div class="event-marker"><img src="' + iconUrl + '" alt="Map Marker"></div>';

	        }

	        var post_id = info.id;

	        //Place markers on google map

	        geocoder.geocode({ address: parsedLocation }, function(response, status){

	        	if (status == google.maps.GeocoderStatus.OK) {

	        		var x = response[0].geometry.location.lat(),

	        		y = response[0].geometry.location.lng();

	        		//Rich marker allows any HTML/DOM to be added

	        		marker = new RichMarker({
	        			position: new google.maps.LatLng(x, y),
						map: map,
						anchor: RichMarkerPosition.BOTTOM,
						flat: true,
						draggable: false,
						
						content: markerContent
					});	


					// listens to click and fires open() for each id

					google.maps.event.addListener(marker, 'click', function(){

						newObj.feed.open();

							var eventDate = '.event-date';
							var texts = $(parsedExcerpt).text();

							//this is html to the info about players and events

							var news = newObj.feed.truncateString(texts, 170, ' ', '...');

							$('.info-text').hide().html(news).fadeIn('slow');

							//Shows all event information

							if (feedType == "event"){

								$('.player-hometown').hide();
								$('.player-TwitterAd').hide();
								$(eventDate).show();
								$(eventDate).html("Date: " + parsedEventDate);
								$('.event-location').html("Location: " + parsedLocation);
								$('.info-title').hide().html(parsedTitle).fadeIn('slow');
							}

							//If lacking information alt is shown

							if (!parsedTwitterAd){

								parsedTwitterAd = "No Information";
										
							}
										
							if (!parsedNickName){
											
								parsedNickName = "No Information";
							}

							//Shows all player information

							if (feedType == "player") {
								//$('').addClass('thumb-frame');
								//$(eventDate).hide();
								$('.info-title').hide().html(parsedTitle).fadeIn('slow');

								console.log(parsedTitle);
								$('.event-location').hide().html("Home Town: " + parsedLocation).fadeIn('slow');
								$('.player-hometown').hide().html("Nick Name: " + parsedNickName).fadeIn('slow');
								$('.player-TwitterAd').hide().html("Twitter Name: " + parsedTwitterAd).fadeIn('slow');
							}
										
										
							//give button its "click" with href attr

							$('.blog-btn').attr('href', info.url);
							console.log(info.url);
										
							//gives "see full blog btn"  visibility

							$('.blog-btn').hide().css('visibility', 'visible').fadeIn('slow');

										
					});
				}
			});
		},
		// /Set Function

		//Limits the amount of context from feed

		truncateString: function  (string, limit, breakChar, rightPad) {

			if (string.length <= limit) {

				return string;
			} 

			var substr = string.substr(0, limit);
			var breakPoint = substr.lastIndexOf(breakChar);

			if (breakPoint >= 0 && breakPoint < string.length) {

				return string.substr(0, breakPoint) + rightPad;
			}
			
		},

		//Hides Intro text shows details

		open: function(){

			$('.introduction').hide();	
			$('.event-details').hide().fadeIn('slow');
		}
	},
	// /Feed 

	map: {

		//Sets map size to window size

		size: function(){

			var w = $(window).width(),
			h = $(window).height();
				return { width: w, height: h };
		},

		//Google maps centered location and zoom size

		data: {

			zoom: 3,
			center: new google.maps.LatLng(48.07, 10.54),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		},

		//Initialize google maps

		init: function(){

			var size = newObj.map.size();

			$('#map').css({ width: size.width, height: size.height });
				
			map = new google.maps.Map(document.getElementById('map'), newObj.map.data);

			geocoder = new google.maps.Geocoder();
				
		}
	},

	//Overlay to ease out from bottom

	slideIn:{

		slide: function(){
									
			setTimeout(function(){

				$('#overlayEaseOut').addClass('overlay-ease-out');

			}, 1000);
		}

	},

	//All nav buttons

	toggle:{

		buttons: function(){

			//Toggle players markers visible/not visible

			$('#playerBtn').on('click', function(event){

				event.preventDefault();

				$(".player-marker").fadeToggle('fast');

				//Changes "hide players" buttons text

				if ($.trim($(this).text()) === "Hide Players"){

					$(this).text("Show Players");

				}else{

					$(this).text('Hide Players');
				}
										
			});
									
			//Toggle event markers visible/not visible

			$('#eventBtn').on('click', function(event){

				event.preventDefault();
										
				$(".event-marker").fadeToggle('fast');

				//Changes "hide events" buttons text

				if ($.trim($(this).text()) === "Hide Events"){

					$(this).text('Show Events');

				}else{

					$(this).text('Hide Events');

				}

			});
									
			//Toggles map information panel

			$('#mapInfoBtn').on('click', function(event){

				event.preventDefault();

				
					$('.info-panel').fadeToggle('slow');

					//$('.info-panel').addClass('show-info-panel');

			});
									
		} 

	}

};

//Initialize world-of-poker

$(window).load(function(){ newObj.init(); });

						