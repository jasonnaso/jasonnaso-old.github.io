
var map, geocoder, marker, thumb,
	ey, my, mouseDown = false;

var o = {
	init: function(){
		
		// fires the map
		this.map.init(); 
		// fires the showing-of-events-markers-on-the-map
		this.feed.show(); 
 		
		// doesn't do anything at the moment
		this.twitter.click(); 
		
		$('button#info').click( function(){
			$('.start').show();
			$('.twitter').hide();	
			$('.event .inside').html('');		  
		});
		$('button#player').click( function(){
			$('#map .marker').toggle();	  
		});	
		$('button#event').click( function(){
		    $('#map .event-marker').toggle();	  
		});
	},
	// here the events gets placed out on the map by fetching them through Json.
	feed: {  
		show: function(){
		// looks for "world-of-poker" and that a custom field for "Location" exists.
		$.getJSON('http://www.raketherake.com/rakeback-news/api/get_category_posts/?category_slug=world-poker-events&custom_fields=Location&callback=?', function(data) { 
		$.each(data.posts,function(i, post){
			
		var par = $.param(post.custom_fields);
		var array = par.split('=')	
		var secondValue = array[1];
		var event_title = post.title;							
					
					// fetches the koordinates for location via google API 
					geocoder.geocode({ address: secondValue }, function(response, status){
						if (status == google.maps.GeocoderStatus.OK) {
							var x = response[0].geometry.location.lat(),
								y = response[0].geometry.location.lng();
							

							// defining the marker as a richmarker in order to create your own marker style.
							marker = new RichMarker({
							  	position: new google.maps.LatLng(x, y),
								title: event_title,
							 	map: map,
								anchor: RichMarkerPosition.BOTTOM,
								flat: true,
							  	draggable: false,
							  	content: '<div class="event-marker"></div>' // displays
							});
							
							// listens to click and fires open() for each id
							google.maps.event.addListener(marker, 'click', function(){        
								o.feed.open(post.id);
							});
							

						}
					});
				});
				
		// fires after the loop
		o.twitter.show();
		});
		
			
		},
		click: function(){

		},
		// function for event id being clicked
		open: function(post_id){
 			
			$('.start').hide();	
			$('.twitter').hide();						       
			var event_info = new Array;			
			
			// loads event	
			$.ajaxSetup({cache:false});
			function load_post(){
				$(".event .inside").html('<span class="loader"><img src="../assets/rtr/images/interface/loading.gif" alt=""></span>');
				$(".event .inside").load("../rakeback-news/wp-content/themes/rtr/event-ajax.php",{id:post_id});
				return false;		
			}
			load_post();

		}
	},
	twitter: {
		// fetching the list of poker players
		get: function(){
			var arr = new Array;
			$('.get').find('input').each(function(i){
				var t = $(this), 
					val = t.val();
				arr[i] = val;				
			});
			return arr;
		},
		// show marker for poker players
		show: function(){
			var users = o.twitter.get(), arr = new Array;
					
			for (i in users){
				var user = users[i];
				
				// json call to twitter fetching the data for the player	
				$.getJSON('https://api.twitter.com/1/users/show.json?screen_name='+user+'&include_entities=true&callback=?', function(data) {
		
				
				var img = data.profile_image_url,
						  screen_name = data.screen_name;

					
					geocoder.geocode({ address: data.location }, function(response, status){
						if (status == google.maps.GeocoderStatus.OK) {
							var x = response[0].geometry.location.lat(),
								y = response[0].geometry.location.lng();
							
							thumb = new RichMarker({
							  	position: new google.maps.LatLng(x, y),
								title: screen_name,
							 	map: map,
								flat: true,
								anchor: RichMarkerPosition.BOTTOM,
							  	draggable: false,
							  	content: '<div class="marker"><img src="' + data.profile_image_url + '"></div>'
							});
							google.maps.event.addListener(thumb, 'click', function(){
								o.twitter.open(this.title);
							});

						}

					});
				
				});				
			
			}

		},
		click: function(){
			$('.twitter').find('.open').live('click', function(){
				var t = $(this), rel = t.attr('rel');
				o.twitter.open(rel);
			});
		},
		// when a twitter marker is clicked this function fires and displays the fetched data
		open: function(user){
			$('.start').hide();	
			$('.event .inside').html('');	
			$('.twitter').show();
			$('.profile').html('<span class="loader"><img src="../assets/rtr/images/interface/loading.gif" alt=""></span>');
			$('.tweets, .ancillarybar').hide();	
			arr = new Array;
			
			$.getJSON('http://twitter.com/status/user_timeline/'+user+'.json?count=5&callback=?', function(data) {
				arr.push('<div class="post"><ul>');
				$.each(data, function(i, post){
					arr.push('<li><span class="twitter-bird"></span>');
					arr.push(post.text);
					arr.push('</li>');
				});
				arr.push('</ul></div>');
				var tweets_html = arr.join('');
				$('.tweets').html(tweets_html).fadeIn();			
			});
			
			var profile = new Array;
				
			$.getJSON('http://twitter.com/users/show/'+user+'.json?callback=?', function(data) {			
				var profile_thumb = data.profile_image_url,
					profile_name = data.screen_name;
				profile.push('<div class="item">');
				profile.push('<p class="img"><a href="#" class="open" rel="'+profile_name+'"><img src="https://api.twitter.com/1/users/profile_image?screen_name='+profile_name+'&size=bigger" alt="" /></a></p>');
				profile.push('<div class="entry">');
				profile.push('<h1>'+data.name+'</h1>');
				profile.push('<p class="screen-name">@'+profile_name+'</p>');
				profile.push('<p class="description">'+data.description+'</p>');
				profile.push('<p class="count">Followers: '+data.followers_count+', Following: '+data.friends_count+' on Twitter</p>');
				profile.push('</div>');
				profile.push('</div>');
				var profile_html = profile.join('');
				$('.twitter').find('.profile').html(profile_html);
				profile= [];
			});
			
			var ancillarypanel = new Array;
			
			$.getJSON('http://twitter.com/users/show/'+user+'.json?callback=?', function(data) {
				$('.tweets, .ancillarybar').show();
				var url = data.url,
					twitter_name = data.screen_name;			
				ancillarypanel.push('<h3>More of '+data.name+'</h3>');
				ancillarypanel.push('<div class="ancillarypanel"><ul class="ex-links">');
				ancillarypanel.push('<li><a href="'+url+'" target="_blank">'+url+'</a></li>');
				ancillarypanel.push('<li><a href="https://twitter.com/'+twitter_name+'" target="_blank">'+data.name+' on Twitter</a><li>');
				ancillarypanel.push('</ul></div>');
				var ancillarypanel_html = ancillarypanel.join('');
				$('.twitter').find('.ancillarybar').html(ancillarypanel_html);
				ancillarypanel_html= [];
				$('.tweets, .ancillarybar').show();
			});
							
		}
	},
	map: {
		// fixed size
		size: function(){
			var w = '954px',
				h = '515px';
			return { width: w, height: h }
		},
		// additional parameters
		data: {
			zoom: 3,
			center: new google.maps.LatLng(52, 23),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		},
		// init the map and store a new Geocoder object in var geocoder
		init: function(){
			var size = o.map.size();
			$('#map').css({ width: size.width, height: size.height });
			
			map = new google.maps.Map(document.getElementById('map'), o.map.data),
			geocoder = new google.maps.Geocoder();
			google.maps.event.addListener(map, 'dragstart', function(){		
			}); 

		}
	}
}
// onload init
$(window).load(function(){ o.init(); });

		