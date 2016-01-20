<?php

    session_start();

    include("includes/functions.php");

    if(!hasLoggedIn()){
    	return;
    }

    autoLogout();
	
	include("includes/head.php");
	include("includes/checkpost.php");

?>

<body id="classlistBody">

<script>
	function showResult(str) {
	  if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	  } else {  // code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		  document.getElementById("list").innerHTML=xmlhttp.responseText;
		}
	  }
	  xmlhttp.open("GET","includes/filterClasslist.php?q="+str,true);
	  xmlhttp.send();
	}

	window.onload=showResult("");
</script>

	<?php include("includes/menu.php");?>

		<div id="list">

			<?php include("includes/filterClasslist.php");?>

		</div>
	</div>


</body>
</html>