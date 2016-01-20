<?php

require_once("dbConnection.php");
include("head.php");

//NOT FINISHED

?>

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
	  xmlhttp.open("GET","filter.php?q="+str,true);
	  xmlhttp.send();
	}

	window.onload=showResult("");
</script>

<body>

<?php

	try{

		$query = "SELECT * FROM educations";

		$ps = $db->prepare($query);

		$ps->execute();

		$educations = $ps->fetchAll();

	}
	catch(Exception $Exception){
		echo $exception;
	}

?>

<?php

	echo "<form>";
	echo "<select name='educations' onchange=\"showResult(this.value)\">";
	echo "<option value=''>Välj en utbildning</option>";

	foreach($educations as $edu){
		echo "<option value=".$edu["education_key"].">".$edu["education_name"]."</option>";
	}

	echo "</select>";
	echo "</form>";

?>

<div id="list"></div>

</body>












