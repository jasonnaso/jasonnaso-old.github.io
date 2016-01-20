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
<body id="studentGradesBody">

		<?php include("includes/menu.php");?>

		<?php

			include("includes/dbConnection.php");

			try{

				$query = "SELECT * FROM grades WHERE user_id = :user_id";

				$ps = $db->prepare($query);

				$ps->execute(array(
					"user_id" => $_SESSION["user_id"]
				));

				$grade = $ps->fetchAll();

				$output = "";

			
				$output .= "<div class='panel panel-default col-md-6 col-md-offset-3 classlistTable'>";
				$output .= "<div class='panel-heading'>";
				$output .= "<h3 class='panel-title'>".$_SESSION["name"]. " " . $_SESSION["lastname"]."</h3>";
				$output .= "</div>";
				$output .= "<div class='panel-body'>";
				$output .= "<div class='table-responsive'>";
				$output .= "<table class='table table-condensed'>";
				$output .= "<thead>";
				$output .= "<tr>";
				$output .= "<th>Kursnamn</th>";
				$output .= "<th>Betyg</th>";
				$output .= "</tr>";
				$output .= "</thead>";
				$output .= "<tbody>";

				foreach($grade as $g){
					$output .= "<tr>";
					$output .= "<td>".$g["course_id"]."</td>";
					$output .= "<td>".$g["grade"]."</td>";
					$output .= "</tr>";
					
				}

				$output .= "</tbody>";
				$output .= "</table>";
				$output .= "</div>";
				$output .= "</div>";
				$output .= "</div>";

				echo $output;

			}catch(Exception $e){
				echo $e;
			}



		?>

</body>
</html>