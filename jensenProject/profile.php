<?php
	session_start();

    include("includes/functions.php");

    if(!hasLoggedIn()){
    	return;
    }

    autoLogout();

	include("includes/head.php");
	include("includes/checkPost.php");
?>
	
<body id="profilePageBody">

		<?php include("includes/menu.php");?>

    	<div id="wrapper">

		<?php if($_SESSION["authority"] === "admin"):

			include("includes/adminOptions.php");?>

		<?php elseif($_SESSION["authority"] === "teacher"): ?>

			<h1>teacher</h1>

		<?php elseif($_SESSION["authority"] === "student"): ?>
			
			

		<?php else: ?>

			<h1>You shouldn't be here</h1>

		<?php endif; ?>


    <script>
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    </script>

<script src="js/adminScript.js?<?php echo time();?>"></script>
<script src="js/profilepageAnimations.js"></script>

</body>
</html>