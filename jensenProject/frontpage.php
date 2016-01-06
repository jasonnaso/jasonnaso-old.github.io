<?php
   //j here
    session_start();

    include("includes/functions.php");

    if(!hasLoggedIn()){
    	return;
    }

    autoLogout();
	
	include("includes/head.php");
	include("includes/checkpost.php");
?>
<body id="frontPageBody">

		<?php include("includes/menu.php");?>

    <div class="container" id="frontPageContainer">

    	<div class="row">
    		<div class="col-sm-4 col-sm-offset-2">
    			<img src="images/iphone.png" class="img-responsive" id="iphone">
    		</div>

    		<div class="col-sm-4" id="lameHeaders">
    			<h2>Ny responsiv design.</h2>
    			<h2>Användarvänlig.</h2>
    			<h2>Allt skräp borta.</h2>
    			<h2>Välkommen in.</h2>
    		</div>

    </div>
<script src="js/frontpageAnimations.js"></script>
</body>
</html>

</body>
</html>