<?php

	require_once("dbConnection.php");
	require_once("functions.php");


	try{ 

		echo "<div class='row'>";
		echo "<div class='col-md-8 col-md-offset-2'"; 
		echo "<form>";
		echo "<select name='educations' class='form-control selectWidth' onchange=\"displayStudents(this.value)\">";
		echo "<option value=''>Kurser</option>";

		foreach(selectAllFrom("courses") as $c){
			echo "<option value=".$c["course_id"].">".$c["course_id"]."</option>";
		}

		echo "</select>";
		echo "</form>";

	}
	catch(Exception $exception){
		echo $exception;
	}
		//this "posts" to grading php
	if(isset($_GET['filterStudents'])){
		try{
				//creating list of students in a particular course
			$query = "SELECT users.name, users.lastname, users.user_id, courses.course_id ";
			$query .= "FROM users JOIN courses ";
			//ON is what joins (with education_key)
			$query .= "ON users.education_key = courses.education_key ";
			$query .= "WHERE courses.course_id = :course_id";

			$ps = $db->prepare($query);
					
			$ps->execute(array(
				"course_id" => $_GET['filterStudents']	
			));

			$usersAndCourses = $ps->fetchAll();

			$output = "";
			
			$output .= "<div class='panel panel-default col-md-12 classlistTable'>";
			$output .= "<div class='panel-heading'>";
			$output .= "<h3 class='panel-title'>Klasslista</h3>";
			$output .= "</div>";
			$output .= "<div class='panel-body'>";
			$output .= "<div class='table-responsive'>";
			$output .= "<table class='table table-condensed' style='color:rgba(255,255,255,0.7);'>";
			$output .= "<thead>";
			$output .= "<tr>";
			$output .= "<th>#</th>";
			$output .= "<th>Förnamn</th>";
			$output .= "<th>Efternamn</th>";
			$output .= "<th>Kurs</th>";
			$output .= "<th>Betyg</th>";
			$output .= "<tr>";
			$output .= "</thead>";
			$output .= "<tbody>";

			foreach($usersAndCourses as $uc){

				$output .= "<form>";
				$output .= "<td id=".$uc["user_id"].">".$uc["user_id"]."</td>";
				$output .= "<td>".$uc["name"]."</td>";
				$output .= "<td>".$uc["lastname"]."</td>";
				$output .= "<td id=".$uc["course_id"].">".$uc["course_id"]."</td>";
				$output .= "<td>";
				$output .= "<td>";
				$output .= "<button value='IG' class='btn btn-small btn-danger valuegrabber'>IG</button>";
				$output .= "</td>";
				$output .= "<td>";
				$output .= "<button value='G' class='btn btn-small btn-danger valuegrabber'>G</button>";
				$output .= "</td>";
				$output .= "<td>";
				$output .= "<button value='VG' class='btn btn-small btn-danger valuegrabber'>VG</button>";
				$output .= "</form>";
				$output .= "</td>";
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
	}else{
		
	}

	if(isset($_GET['updateGrade'])){

		$course_id = $_GET["course_id"];
		$user_id   = $_GET["user_id"]; 	
		$grade     = $_GET["grade"];
		$gradeExists = false;

		try{

			$query = "SELECT * FROM grades ";
			$query .= "WHERE user_id = :user_id AND course_id = :course_id";
			
			$ps = $db->prepare($query);

			$ps->execute(array(

				"user_id" => $user_id,
				"course_id" => $course_id

			));

			$gradeExists = $ps->fetch(PDO::FETCH_ASSOC);
			

		}catch(Exception $exception){
			echo $exception;


		}

		if($gradeExists){


			try{

				$query = "UPDATE grades ";
				$query .= "SET grade = :grade ";
				$query .= "WHERE user_id = :user_id AND course_id = :course_id";

				$ps = $db->prepare($query);

				$ps->execute(array(

				"user_id" => $user_id,
				"course_id" => $course_id,
				"grade" => $grade

				));

			}catch(Exception $exception){
				echo $exception;
			}

		}else{

			try{

				$query = "INSERT INTO grades (course_id, user_id, grade) ";
				$query .= "VALUES (:course_id, :user_id, :grade)";

				$ps = $db->prepare($query);

				$ps->execute(array(

					"course_id" => $course_id,
					"user_id"   => $user_id,
					"grade"     => $grade

				));

			} catch(Exception $exception){				
				echo $exception;
			}
		}
	}
	else{
		//Do nothing
	}

	echo "</div></div>";













