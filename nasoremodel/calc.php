<?php
	
	//Random calculator choice on page load
	$calculator = array(
		
		"calc-roof.php",
	    "calc-window.php",
	    "calc-chimney.php",
	    "calc-door.php",
	    "calc-paint.php"
	);
	    
	    $max = count($calculator);
	    
	    $random_number = mt_rand(0, $max - 1);
	    
	    include $calculator[$random_number];
?>