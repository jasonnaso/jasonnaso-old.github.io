<?php 


require_once("dbConnection.php");

//NOT FINISHED

?>

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

	echo "<div class='row'>";
	echo "<div class='col-md-8 col-md-offset-2'"; 
	echo "<form>";
	echo "<select name='educations' class='form-control selectWidth' onchange=\"showResult(this.value)\">";
	echo "<option value=''>Utbildningar</option>";

	foreach($educations as $edu){
		echo "<option value=".$edu["education_key"].">".$edu["education_name"]."</option>";
	}

	echo "</select>";
	echo "</form>";

?>

<?php
	require_once("dbConnection.php");

	if($_GET['q']!== ""){
		try{


			$query = "SELECT education_key, name, lastname, socialsecurity ";
			$query .= "FROM users WHERE authority = 'student' AND education_key = :education_key";

			$ps = $db->prepare($query);
					
			$ps->execute(array(
				"education_key" => $_GET['q']	
			));

			$users = $ps->fetchAll();

			$output = "";
			
			$output .= "<div class='panel panel-default col-md-12 classlistTable'>";
			$output .= "<div class='panel-heading'>";
			$output .= "<h3 class='panel-title'>Klasslista</h3>";
			$output .= "</div>";
			$output .= "<div class='panel-body'>";
			$output .= "<div class='table-responsive'>";
			$output .= "<table class='table table-condensed'>";
			$output .= "<thead>";
			$output .= "<tr>";
			$output .= "<th>Förnamn</th>";
			$output .= "<th>Efternamn</th>";
			$output .= "<th>Personnummer</th>";
			$output .= "<tr>";
			$output .= "</thead>";
			$output .= "<tbody>";

			foreach($users as $user){
				$output .= "<td>".$user["name"]."</td>";
				$output .= "<td>".$user["lastname"]."</td>";
				$output .= "<td>".$user["socialsecurity"]."</td>";
				$output .= "</tr>";

			}
			$output .= "</tbody>";
			$output .= "</table>";
			$output .= "</div>";
			$output .= "</div>";
			$output .= "</div>";

			echo $output;

					
		}
		catch(Exception $exception) {
			echo "Query failed, see error message below: <br /><br />";
			echo $exception. "<br /><br />";
		}
	}

	echo "</div></div>";


?>









