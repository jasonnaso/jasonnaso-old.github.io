<?php
  //j here
	session_start();
	require_once("includes/dbConnection.php");
	include("includes/functions.php");

	if(!hasLoggedIn()){
    	return;
    }
	
	autoLogout();
	
	include("includes/head.php");
	include("includes/checkpost.php");
?>

<?php include("includes/menu.php");?>   	
<script src="js/frontpageAnimations.js"></script>
<body id="contactPageBackground">
	<div id="placeHolder"><h1 id="contactHeading">Kontakta oss</h1></div>
		
		<div class="container" id="allAddresses">
			<div class="row">

			  	<div class="col-md-4" id="stockholm">

			  		<p class="cities">Stockholm</p>
			  			<hr>
			  			<p>
			  				JENSEN Yrkeshögskola <br>
							Kontaktperson: Martin Wesseloh<br>
							Telefon: 08-450 22 20<br>
							<a href="mailto:info@jensenyrkeshogskola.se">info@jensenyrkeshogskola.se</a><br>
							Tulegatan 44, plan 2, 113 53 Stockholm<br>
							T-bana: Rådmansgatan/Odenplan,<br>
							Buss: 4, 42, 43, 53, 72, 94.<br>
						</p>
				</div>

				<div class="col-md-4" id="malmo">
					
						<p class="cities">Göteborg</p>
						<hr>
						<p>
							JENSEN Yrkeshögskola <br>
							Kontaktperson: Martin Wesseloh<br>
							Telefon: 076-29 16 080<br> 
							<a href="mailto:martin.wesseloh@jenseneducation.se">martin.wesseloh@jenseneducation.se</a><br>
						</p>
				</div>
						
				<div class="col-md-4" id="goteborg">
					<p class="cities">Malmö</p>
						<hr>
						<p>
							JENSEN Yrkeshögskola <br>
							Kontaktperson: Sara Wickenberg<br>
							Telefon: 076-05 08 580<br>
							<a href="mailto:sara.wickenberg@jenseneducation.se">sara.wickenberg@jenseneducation.se</a><br>
							Kruthusgatan 17, 411 04 Göteborg<br>
						</p>
				</div>
			</div>
					
				<footer>
					<p>

						<hr id="postAddressBar">
						Vuxenutbildning<br>
						Box 111 24<br>
						100 61 Stockholm<br>
					</p>
				</footer>
					
		</div>


<script src="js/contactPage.js"></script> 
</body>
</html>